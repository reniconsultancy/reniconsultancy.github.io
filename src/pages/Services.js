import { Link } from "react-router-dom";
import Connectivity from "../assets/connectivity.png";
import Analysis from "../assets/analysis.png";

function Services() {
    return (
      <div>

        <div className="row">
            <div className="column">
              <div className="container">
                <img src={Connectivity} />
              </div>
            </div>
            <div className="column beige">
              <div className="container">
              At RENI, we rely on community partnership and shared expertise to help organizations and agencies reach their goals through effective strategic planning, program development and implementation, and evaluations.
              </div>
            </div>
          </div>

          <div className="container navy disHeight">
            <div className="row">Programming</div>
            <div className="row smallFont extraTextHide">
            Logic models – A logic model is a visual map depicting the relationship between your program’s resources and activities and the intended outputs and outcomes of your efforts. <br/> <br/>
            Outcomes – Outcomes are the desired results of a program’s efforts and include learning, action, and conditions. Selecting realistic and purposeful outcomes is essential to positively impacting people and communities. <br/> <br/>
            Strategic planning – Strategic planning establishes the purpose and direction of your organization and programs to meet client needs with appropriate and sustainable efforts. This includes appropriately communicating the mission, values, strengths/weaknesses, strategies, resources, and ongoing evaluation plan. <br/> <br/>
            Program development – Program development establishes the action plan by which your program will be delivered. This can include creating a new program or reviewing and expanding upon a current program. Plans should be informed by a needs assessment and best practices. <br/> <br/>
            Program implementation – Program implementation includes the management and ongoing evaluation of efforts. Implementation strategies involve defining processes and procedures to organize the work and track efforts linked to outcomes.</div>
          </div>

          <div className="container orange disHeight">
            <div className="row hide800">Evaluation</div>
            <div className="row smallFont extraTextHide">
            Long-term evaluation - Long-term program evaluation includes evaluation of programs and workshops that are offered on an ongoing basis such as a 12-week psychosocial support group or educational groups. This type of evaluation can offer insight into the influence of programs over time and inform the ways in which programs can be adjusted and improved. <br/> <br/>
            Short-term evaluation – Short-term evaluation is most commonly utilized to evaluate programs and workshops that are offered in one session. These evaluations can be conducted in person or virtually and often provide insightful information on the most significant and impactful aspects of these programs to improve the quality for future programs. <br/> <br/>
            Passive evaluation—Passive evaluation is used to evaluate programs that are delivered in nontraditional ways such as public service announcements, art installations, messaging boards, and pop up workshops. These evaluations are useful to enhance community awareness, community participation, and advocacy efforts.<br/> <br/>
            Satisfaction surveys - Satisfaction surveys are used to measure client and consumer satisfaction with a program, training, or service they are receiving. Information gathered from this type of evaluation is used to enhance the quality of services and workshops to meet the needs of clients.<br/> <br/>
            Quality assurance - Quality assurance is a method of evaluation utilized to measure and maintain an ongoing level of quality of services and elevate future service delivery and provisions. 
 
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="column disappear">
                <img src={Analysis} />
              </div>
              <div className="column">
                <div>Whether you are a one-person, private practice or a large agency, we can help you make data-driven decisions to execute best practices and achieve planned success.</div>
                <div style={{paddingTop: "40px"}}>
                <button className="orange"><Link to="/contact">Connect with us.</Link></button>
              </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
  
  export default Services;