var word = function (d, idp, dataSet, textSet, svgWidth, svgHeight, rectHeight, rectWidth) {
  // word(d3库, 插入ID, 热度数据, 热度文本, SVG宽度, SVG高度, RECT高度, RECT宽度)
  var d3 = d
  var id = idp
  // 添加tooltips
  var tooltips = d3.select('body')
                   .append('div')
                   .attr('id', 'tooltips')
                   .attr('style', 'height:30px;width:120px;position:absolute;font-family: simsun; font-size: 14px; text-align: center; background-color: white; border: 1px solid black; border-radius: 5px;')
  // 制作线性比例尺
  var linear = d3.scaleLinear()
      .domain([0, d3.max(dataSet)])
      .range([0, rectWidth])
  // 添加画布
  var div = d3.select(id)
      .append('div')
      .attr('id', 'add-div')
      // .attr('style', 'width:' + svgWidth + 'px;height:' + svgHeight + 'px;padding:0xp;margin:0px;')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
  var svg = div.selectAll('svg')
      .data(dataSet)
      .enter()
      .append('svg')
      .attr('class', 'creat-svg')
      .attr('width', rectWidth)
      .attr('height', rectHeight - 2)
      .attr('style', 'cursor:pointer;background-color:white;margin-left:3px;border:1px solid white;')
      .attr('x', function (d, i) {
       //  console.log(i)
        if (i % 2 === 0) {
          return 3
        } else {
          return rectWidth + 10
        }
      })
      .attr('y', function (d, i) {
        if ((i % 2 === 0)) {
          return (i / 2) * rectHeight
        } else {
          return (i - 1) / 2 * rectHeight
        }
      })
     .append('rect')
     .attr('class', 'rect')
     .attr('x', 0)
     .attr('y', 0)
    //  .transition()
    //  .duration(500)
     .attr('width', function (d, i) {
       return linear(d)
     })
     .attr('height', rectHeight - 2)
     .attr('fill', '#4594d1')
    //  .transition()
    //  .duration(500)
  // 添加事件
  d3.select(id)
    .selectAll('.creat-svg')
    .on('mouseover', function (d, i) {
      d3.select(this)
        .attr('style', 'cursor:pointer;margin-left:3px;border:1px solid rgb(56, 148, 193')
      // tooltips.html('d3.event.pageX')
      //         .style('left', (d3.event.pageX + 20) + 'px')
      //         .style('top', (d3.event.pageY + 20) + 'px')
      //         .style('opacity', 1.0)
    })
    .on('mousemove', function (d, i) {
      // tooltips.style('left', (d3.event.pageX + 20) + 'px')
      //         .style('top', (d3.event.pageY + 20) + 'px')
      //         .style('opacity', 1.0)
    })
    .on('mouseout', function (d, i) {
      d3.select(this).attr('style', 'cursor:pointer;background-color:white;margin-left:3px;border: 1px solid white;')
      // tooltips.style('opacity', 0.0)
    })
   // 添加文字
  d3.select(id)
    .selectAll('.creat-svg')
    .data(textSet)
    .append('text')
    .attr('style', 'font-size:13px;font-weight:400;display:none;')
    .transition()
    .duration(500)
    .attr('style', 'font-size:13px;font-weight:400;')
    .attr('x', function (d, i) {
      return 0
    })
    .attr('y', function (d, i) {
      return 0
    })
    .attr('dx', function () {
      return 8
    })
    .attr('dy', function (d) {
      return 18
    })
    .attr('fill', '#393939')
    .text(function (d) {
      return d
    })
    // 添加数字
  d3.select(id)
   .selectAll('.creat-svg')
   .data(dataSet)
   .append('text')
   .attr('style', 'font-size:13px;font-weight:400;display:none;')
   .transition()
   .duration(500)
   .attr('style', 'font-size:13px;font-weight:400;')
   .attr('x', function (d, i) {
     return 0
   })
   .attr('y', function (d, i) {
     return 0
   })
   .attr('dx', function () {
     return rectWidth - 50
   })
   .attr('dy', function (d) {
     return 18
   })
   .attr('fill', '#393939')
   .text(function (d) {
     return d
   })
  console.log(tooltips)
  return svg
}
export default word
