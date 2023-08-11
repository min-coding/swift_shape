import { useState } from 'react';
import { Header, Content } from 'antd/es/layout/layout';
import './App.css';
import Action from './components/Action';
import { Layout } from 'antd';
import Shapes from './components/Shapes';

function App() {
  const items = [
    'square',
    'circle',
    'oval',
    'trapezoid',
    'rectangle',
    'parallelogram',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Layout style={{ background: 'transparent' }}>
        <Header
          style={{
            background: 'transparent',
            textAlign: 'left',
            marginBottom: '1em',
          }}>
          <h1>Layout & Style</h1>
        </Header>
        <Content style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Action items={items} setActiveIndex={setActiveIndex}></Action>
          <Shapes
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}></Shapes>
        </Content>
      </Layout>
    </>
  );
}

export default App;
