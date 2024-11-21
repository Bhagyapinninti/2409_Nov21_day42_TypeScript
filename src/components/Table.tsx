import React from 'react'

function Table(props:any) {
  return (
    <div>
     
     <legend>{props.name} Marks Sheet</legend>
      <table>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Max Marks</th>
                <th>Marks Obtained</th>
                <th>Result</th>
            </tr>
                
            
        </thead>
        <tbody>
             <tr>
                <td>English</td>
                <td>{props.maxMarks}</td>
                <td>{props.engMarks}</td>
                <td>{props.result}</td>
                
            </tr>

            <tr>
                <td>Telugu</td>
                <td>{props.maxMarks}</td>
                <td>{props.telMarks}</td>
                <td>{props.result}</td>
                
            </tr>
           
            <tr>
                <td>Hindi</td>
                <td>{props.maxMarks}</td>
                <td>{props.hinMarks}</td>
                <td>{props.result}</td>
                
            </tr>

            <tr>
                <td>Maths</td>
                <td>{props.maxMarks}</td>
                <td>{props.matMarks}</td>
                <td>{props.result}</td>
            </tr>

            <tr>
                <td>Science</td>
                <td>{props.maxMarks}</td>
                <td>{props.sciMarks}</td>
                <td>{props.result}</td>
                
            </tr>

           <tr>
                <td>Social</td>
                <td>{props.maxMarks}</td>
                <td>{props.socMarks}</td>
                <td>{props.result}</td>
                
            </tr>

           
            </tbody>

        <tfoot>
        <tr>
            <th>Total</th>
            <th>{props.TotalMarks}</th>
            <th>{props.gainedMarks}</th>
            <th>{props.result}</th>
        </tr>
       </tfoot>
      </table> 
    </div>
  )
}

export default Table
