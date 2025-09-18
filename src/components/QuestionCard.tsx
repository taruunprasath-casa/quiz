
import '../styles/QuestionCard.css'
import Answercard from './Answercard'
export default function QuestionCard(){
    return (
        <><div className='page-bg'>
 <div className='main-div'>
 <div className='qn-div'>
            <div className='save'>
                <div>
                <select name="point" id="point">
                    <option value="1">1 point</option>
                    <option value="2">2 point</option>
                    <option value="3">4 point</option>
                </select>
                </div>

                <div>
                <select name="" id="time">
                    <option value="10sec">10 seconds</option>
                    <option value="20sec">20 seconds</option>
                    <option value="30sec">30 seconds</option>
                </select>
                </div>

                <div>
                    
                <button className='save-btn'>Save Question</button>

                </div>


                
            </div>
            <div className='div'>
                <div>
                    <input id='qn-input'type="text" placeholder='Enter Question' />
                </div>
                <Answercard/>
            </div>
        </div>
        </div>
        </div>
       
       
        </>
    );
}