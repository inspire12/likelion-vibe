// src/pages/History.jsx
import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

export default function History() {
  const svgRef = useRef()
  
  useEffect(() => {
    const svg = d3
    .select(svgRef.current)
    .attr('viewBox', `0 0 ${700} ${400}`)
    .style('background-color', '#fff') // 배경 흰색
    
    const width = 700
    const height = 400
    const margin = { top: 20, right: 20, bottom: 60, left: 80 }
    
    // 연도별 로그형 개발실력 데이터
    const data = d3.range(2018, 2026).map(year => ({
      date: new Date(year, 0, 1),
      value: Math.exp(year - 2017 + 3) * 3
    }))
    
    const xScale = d3
    .scaleTime()
    .domain([new Date(2018, 0, 1), new Date(2025, 0, 1)])
    .range([margin.left, width - margin.right])
    
    const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height - margin.bottom, margin.top])
    
    const xAxis = d3
    .axisBottom(xScale)
    .ticks(d3.timeYear.every(1))
    .tickFormat(d3.timeFormat('%Y'))
    
    const yAxis = d3.axisLeft(yScale).ticks(5)
    
    svg.selectAll('*').remove()
    
    // x축
    svg
    .append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(xAxis)
    .selectAll('text')
    .attr('fill', '#000')
    svg.selectAll('.domain, .tick line').attr('stroke', '#000')
    
    // y축
    svg
    .append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(yAxis)
    .selectAll('text')
    .attr('fill', '#000')
    svg.selectAll('.domain, .tick line').attr('stroke', '#000')
    
    // x축 레이블
    svg
    .append('text')
    .attr('x', width / 2)
    .attr('y', height - 20)
    .attr('text-anchor', 'middle')
    .attr('fill', '#000')
    .text('Year')
    
    // y축 레이블
    svg
    .append('text')
    .attr('transform', `translate(20,${height / 2}) rotate(-90)`)
    .attr('text-anchor', 'middle')
    .attr('fill', '#000')
    .text('개발실력')
    
    // 선 그래프
    const line = d3
    .line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    .curve(d3.curveMonotoneX)
    
    const path = svg
    .append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#3b82f6')
    .attr('stroke-width', 2)
    .attr('d', line)
    
    // 애니메이션
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
