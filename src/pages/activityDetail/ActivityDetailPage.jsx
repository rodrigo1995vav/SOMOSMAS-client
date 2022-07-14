import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import Alert from '../../services/AlertService';
import { getPublic } from '../../services/apiServices';

/**
 * Fake data. Please @comment this object when
 * perform real backend comunication
 */
const activity = {
  name: 'Reunión semanal',
  image: 'https://adenuniversity.us/files/sites/3/2018/11/shutterstock_633351611.png',
  content:'There are many variations of passages of Lorem Ipsum available,  but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorson the Internet tend to repeat predefined chunks as necessary, making this the firsttrue generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
}

const ActivityDetailPage = () => {

  /**
   * Please @uncomment the code below to perform the
   * comunication with the endpoint. Please provide 
   * an activity @id via url param. Ex: activity/1.
   * Use this component inside a @Router environment to
   * get access to react-router hooks
   */

  // const [activity, setActivity] = useState(null);
  // const navigate = useNavigate();
  // const { id } = useParams();

  // // It performs the request, if the object data it 
  // // contains the err property, it fires an alert with
  // // the error. After user press OK in the alert pop up
  // // it navigates to the previous page

  // // If err property is not present, it set the activity
  // // state
  // useEffect(() => {
  //   getPublic(`http://localhost:3001/auth/testendpoint/${ id }`)
  //     .then(({ data }) => {

  //       if(data.err) {
  //         return Alert.error({title: 'Error', message: data.err})
  //             .then( (result) => result.isConfirmed && navigate(-1) )
  //       }
  //       setActivity(data);
  //     })
  // }, [])
  
  // It shows the loader meanwhile the request is performed
  if(!activity) return <Loader className='d-flex justify-content-center align-items-center vh-100'/>

  return (
    <div className='activity-detail'>
      <div className='activity-image-container'>
      <img 
        src={ activity.image } 
        alt="activity"
        className='activity-image'
        />
      </div>

      <div className='activity-text-container'>
        <h1 className='activity-text-title'>{ activity.name }</h1>
        <hr></hr>
        <p className='activity-text-paragraph'>
          {activity.content}
        </p>
        <button 
          // onClick={ () => navigate(-1) }
          className='btn btn-primary text-white px-5 fs-3'
          style ={{ borderRadius:"6px" }}
        >
          Volver
        </button>
      </div>
    </div>
  )
}

export default ActivityDetailPage
