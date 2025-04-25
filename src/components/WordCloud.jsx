import React from 'react';
import WordCloud from 'react-d3-cloud';
import * as d3 from 'd3-scale';

const WordCloudComponent = () => {
  const data = [
    { text: 'Spring', value: 100 },
    { text: 'Python', value: 80 },
    { text: 'JavaScript', value: 70 },
    { text: 'React', value: 60 },
    { text: 'Node.js', value: 50 },
    { text: 'TypeScript', value: 40 },
    { text: 'AWS', value: 90 },
    { text: 'K8S', value: 85 },
    { text: 'Docker', value: 75 },
    { text: 'Git', value: 65 },
  ];

  const fontSizeMapper = word => Math.log2(word.value) * 5;
  const rotate = word => word.value % 2 === 0 ? 0 : 90;

  return (
    <div className="w-full max-w-7xl mx-auto py-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
      <div style={{ width: '100%', height: '400px' }}>
        <WordCloud
          data={data}
          fontSizeMapper={fontSizeMapper}
          rotate={rotate}
          width={1000}
          height={400}
          padding={5}
          random={() => 0.5}
          fill={(d, i) => d3.schemeCategory10[i % 10]}
        />
      </div>
    </div>
  );
};

export default WordCloudComponent; 