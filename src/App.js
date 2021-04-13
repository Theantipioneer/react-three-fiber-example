import React, {useRef} from 'react';
import './App.scss';
import {Canvas, useFrame} from 'react-three-fiber';

// We are taking props here so we can use them in the App function as thats where the SpinningMesh function is going. 
const SpinningMesh = ({position, args, color}) => {
    const mesh = useRef(null);

    useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01});

  return(
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  );
}


function App() {
  return (
    <Canvas colorManagement>
      <ambientLight intensity= {1} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <SpinningMesh position={[-1, 1, 0]} color='lightblue' args={[3,2,1]} />
      <SpinningMesh position={[1.5,0.5, -0.5]} color='cyan'/>
      <SpinningMesh position={[-0.5, -1.6, 0.2]} color='lime'/>

    </Canvas>
    
  );
}

export default App;
