
/**
 * @param {number} additionalHeight
 */
export const moveGroupsDown = (additionalHeight) => {
    const elementsToMove = document.querySelectorAll('.group11, .group13, .group17, .group18');

    elementsToMove.forEach(element => {
      element.style.transition = 'transform 0.5s ease';
      element.style.transform = `translateY(${additionalHeight}px)`;
    });
  };

  /**
   * @param {number} rows - Number of rows
   * @param {number} baseRows - Initial number of rows (default is 2)
   * @returns {number} - Additional height in pixels
   */
  export const calculateAdditionalHeight = (rows, baseRows = 2) => {
    const rowHeight = 320; // Approximate height of each property row in pixels
    return (rows - baseRows) * rowHeight;
  };