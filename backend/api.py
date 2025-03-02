from flask import Flask, request, jsonify
from flask_cors import CORS
from database import RealEstateDatabase
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize database
db = RealEstateDatabase()

@app.route('/api/properties', methods=['GET'])
def get_properties():
    """Get all properties with optional filtering"""
    filters = {}

    # Parse query parameters for filtering
    if 'city' in request.args:
        filters['city'] = request.args.get('city')
    if 'listing_type' in request.args:
        filters['listing_type'] = request.args.get('listing_type')
    if 'price_min' in request.args:
        try:
            filters['price_min'] = float(request.args.get('price_min'))
        except ValueError:
            return jsonify({"error": "Invalid price_min value"}), 400

    if 'price_max' in request.args:
        try:
            filters['price_max'] = float(request.args.get('price_max'))
        except ValueError:
            return jsonify({"error": "Invalid price_max value"}), 400
    if 'bedrooms_min' in request.args:
        filters['bedrooms_min'] = int(request.args.get('bedrooms_min'))
    if 'house_type' in request.args:
        filters['house_type'] = request.args.get('house_type')

    # Parse sorting parameters
    sort_by = request.args.get('sort_by', 'created_at')
    sort_order = request.args.get('sort_order', 'DESC')

    if filters:
        properties = db.search_properties(filters, sort_by, sort_order)
    else:
        properties = db.get_all_properties()

    return jsonify(properties)

@app.route('/api/properties/<int:property_id>', methods=['GET'])
def get_property(property_id):
    """Get a specific property by ID"""
    property_data = db.get_property(property_id)
    if property_data:
        return jsonify(property_data)
    return jsonify({"error": "Property not found"}), 404


@app.route('/api/properties', methods=['POST'])
def add_property():
    """Add a new property"""
    data = request.json
    try:
        property_id = db.add_property(
            house_type=data.get('house_type'),
            listing_type=data.get('listing_type'),
            bedrooms=data.get('bedrooms'),
            toilets=data.get('toilets'),
            address=data.get('address'),
            tel_number=data.get('tel_number'),
            house_square=data.get('house_square'),
            city=data.get('city'),
            price=data.get('price'),
            user_full_name=data.get('user_full_name'),
            email=data.get('email'),
            image_path=data.get('image_path'),
            description=data.get('description')
        )
        return jsonify({"id": property_id, "message": "Property added successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/api/properties/<property_id>', methods=['PUT'])
def update_property(property_id):
    """Update an existing property"""
    data = request.json

    # Remove any fields that shouldn't be updated
    if 'id' in data:
        del data['id']
    if 'created_at' in data:
        del data['created_at']

    success = db.update_property(property_id, **data)

    if success:
        return jsonify({"message": "Property updated successfully"})
    return jsonify({"error": "Failed to update property"}), 400

@app.route('/api/properties/<property_id>', methods=['DELETE'])
def delete_property(property_id):
    """Delete a property"""
    success = db.delete_property(property_id)

    if success:
        return jsonify({"message": "Property deleted successfully"})
    return jsonify({"error": "Failed to delete property"}), 404

@app.route('/api/properties/types', methods=['GET'])
def get_property_types():
    """Get properties by listing type (sell or rent)"""
    listing_type = request.args.get('type', 'sell')  # Default to 'sell'
    properties = db.get_properties_by_type(listing_type)

    return jsonify(properties)

@app.route('/api/properties/sorted', methods=['GET'])
def get_sorted_properties():
    """Get properties sorted by city, house type, bedrooms, and max price"""
    filters = {}

    # Получаем параметры из запроса
    if 'city' in request.args:
        filters['city'] = request.args.get('city')
    if 'house_type' in request.args:
        filters['house_type'] = request.args.get('house_type')

    if 'bedrooms' in request.args:
        try:
            filters['bedrooms'] = int(request.args.get('bedrooms'))
        except ValueError:
            return jsonify({"error": "Invalid bedrooms value"}), 400

    if 'max_price' in request.args:
        try:
            filters['price_max'] = float(request.args.get('max_price'))
        except ValueError:
            return jsonify({"error": "Invalid max_price value"}), 400

    # Получаем данные из БД, сортируем по убыванию цены
    properties = db.search_properties(filters, sort_by='price', sort_order='DESC')

    return jsonify(properties)



if __name__ == '__main__':
    app.run(debug=True, port=5000)