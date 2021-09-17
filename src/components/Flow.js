import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Start' },  
      position: { x: 250, y: 25 },
    },
    {
      id: '2',
      data: { label: 'Milestone' },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      type: 'output',
      data: { label: 'End' },
      position: { x: 250, y: 250 },
    },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
  ];

function Flow() {
    return (
        <div style={{ height: 600 }}>
            <ReactFlow elements={elements} />
        </div>
    )
}

export default Flow;