function rectangle(length, width) {
    this.length = length
    this.width = width
    this.areaPerimeter = function() {
        console.log(length * width)
        console.log(2 * (length + width))
    }
}