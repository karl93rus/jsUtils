export function removeElem() {
  if(!('remove' in HTMLElement)) {
    HTMLElement.prototype.remove = function() {
      if(this.parentNode) {
        this.parentNode.removeChild(this);
      }
    }
  }
}