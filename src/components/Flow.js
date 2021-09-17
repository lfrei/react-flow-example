import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
];


function Flow() {
    return (
        <div style={{ height: 600 }}>
            <ReactFlow elements={elements} />
        </div>
    )
}

export default Flow;