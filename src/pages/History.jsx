// src/pages/History.jsx
import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

export default function History() {
  const svgRef = useRef()
  
  useEffect(() => {
    const svg = d3.select(svgRef.current)
    const width = 700
    const height = 400
    const margin = { top: 20, right: 20, bottom: 60, left: 80 }
    
    svg.attr('viewBox', `0 0 ${width} ${height}`)
    
    // 원래 f(x)=log(year-2017)*10 데이터
    const data = d3.range(2018, 2026).map(year => ({
      date: new Date(year, 0, 1),
      value: Math.log(year - 2017) * 10
    }))
    
    const maxVal = d3.max(data, d => d.value)
    
    // 역함수: x축에 '개발실력', y축에 'Year'
    const xScale = d3
    .scaleLinear()
    .domain([0, maxVal])
    .range([margin.left, width - margin.right])
    
    const yScale = d3
    .scaleTime()
    .domain([new Date(2018, 0, 1), new Date(2025, 0, 1)])
    .range([height - margin.bottom, margin.top])
    
    const xAxis = d3.axisBottom(xScale).ticks(5)
    const yAxis = d3.axisLeft(yScale).ticks(d3.timeYear.every(1)).tickFormat(d3.timeFormat('%Y'))
    
    svg.selectAll('*').remove()
    
    svg
    .append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(xAxis)
    
    svg
    .append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(yAxis)
    
    // x축 레이블
    svg
    .append('text')
    .attr('x', width / 2)
    .attr('y', height - 20)
    .attr('text-anchor', 'middle')
    .text('개발실력')
    
    // y축 레이블
    svg
    .append('text')
    .attr('transform', `translate(20,${height / 2}) rotate(-90)`)
    .attr('text-anchor', 'middle')
    .text('Year')
    
    const line = d3
    .line()
    .x(d => xScale(d.value))
    .y(d => yScale(d.date))
    .curve(d3.curveMonotoneX)
    
    const path = svg
    .append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#3b82f6')
    .attr('stroke-width', 2)
    .attr('d', line)
    
    const totalLength = path.node().getTotalLength()
    
    path
    .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
    .attr('stroke-dashoffset', totalLength)
    .transition()
    .duration(3000)
    .ease(d3.easeLinear)
    .attr('stroke-dashoffset', 0)
  }, [])
  
  return (
    <section className="min-h-screen p-8 pt-24">
      <h2 className="text-4xl mb-6">History</h2>
      <div className="overflow-x-auto">
        <svg ref={svgRef} className="w-full h-80"></svg>
      </div>
    </section>
  )
}
