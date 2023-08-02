import { get } from 'react-hook-form';
import {create} from 'zustand';

const useDimensionStore = create((set) => ({
    orginalDimensions:{orginalX:5,orginalY:5},
    floorY:5,
    thickness:0.5,
    floorX:5,
    wallsHeight:2.5,    
    wallsResrticrion: true,
    clickedChair: '',
    chairs:[],
    P:true,
    roomsize :(state)=>{get({width:state.floorX, height:state.wallsHeight,depth:state.floorY})},
    
    setCameraControlsAcitve: (b)=>set(state=>({cameraControlsAcitve:b})),
    updateChairs:(updatedChair,msh)=>set(state=>({chairs:state.chairs.map(chair=>chair.id === updatedChair.id ? updatedChair : chair)}) ),
    clickChair: (id)=>set(state=>({clickedChair:id})),
    addChair:(chair)=>set(state=>({chairs:[...state.chairs,chair]})),
    changeWallsHeight:(height)=>set(state=>({wallsHeight:height})),
    changeX:(x)=>set(state=>({floorX:x})),
    changeY:(y)=>set(state=>({floorY:y})),
    changeThickness:(thickness)=>set(state=>({thickness:thickness})),
    setWallRestriction:(bool)=>set(state=>({wallsResrticrion:bool})),
    // min: this.floorX /2,
    // max: this.floorY/2
   
}));
export default useDimensionStore;   
