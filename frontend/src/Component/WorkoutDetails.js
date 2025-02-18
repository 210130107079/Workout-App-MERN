 import {useWorkoutContext} from '../useWorkoutContext'
 import {formatDistanceToNow} from 'date-fns'

const WorkoutDetails = ({ workout }) => {

  const {dispatch} = useWorkoutContext()

  const handleDelete = async () => {
    const response = await fetch('/api/workouts/' + workout._id , {
      method:'DELETE'
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type:'DELETE_WORKOUT',payload:json})      
    } 
  }


    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <span className="material-symbols-outlined"onClick={handleDelete}>delete</span>
      </div>
    )
  }
  
  export default WorkoutDetails