import { WorkoutContext } from "./WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)
    if(!context){
        throw Error('ERRORRR !!')
    }

    return context
}