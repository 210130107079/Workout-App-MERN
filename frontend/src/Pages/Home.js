import {useEffect} from 'react'
import {useWorkoutContext} from '../useWorkoutContext'
import WorkoutDetails from '../Component/WorkoutDetails'
import WorkoutForm from '../Component/WorkoutForm'

const Home = () =>{

    const {workouts, dispatch} = useWorkoutContext()

    useEffect( () => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if(response.ok){
                dispatch({type:'SET_WORKOUTS',payload:json})
            }
        }
        fetchWorkouts()
    } , [dispatch])

    return(
        <div className = "home">
            <div className='workouts'>
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm />     
        </div>
    )
}

export default Home