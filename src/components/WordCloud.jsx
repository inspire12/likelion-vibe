import React from 'react';
import { TagCloud } from 'react-tagcloud';

const WordCloud = () => {
  const data = [
    { value: 'Spring', count: 38 },
    { value: 'Python', count: 23 },
    { value: 'JavaScript', count: 20 },
    { value: 'React', count: 13 },
    { value: 'Node.js', count: 14 },
    { value: 'TypeScript', count: 8 },
    { value: 'AWS', count: 20 },
    { value: 'K8S', count: 20 },
    { value: 'Docker', count: 18 },
    { value: 'Git', count: 15 },
    { value: 'MongoDB', count: 13 },
    { value: 'MySQL', count: 10 },
  ];

  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        display: 'inline-block',
        padding: '1px',
        margin: '0px',
        fontSize: `${size / 3}em`,
        color: '#000000',
        transition: 'all 0.3s ease',
        cursor: 'default',
        transform: `rotate(${Math.random() * 20 - 10}deg)`,
      }}
      className="hover:scale-110"
    >
      {tag.value}
    </span>
  );

  return (
    <div className="w-full max-w-7xl mx-auto py-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={data}
        renderer={customRenderer}
        className="flex flex-wrap justify-center items-center p-2 gap-0"
      />
    </div>
  );
};

export default WordCloud; 