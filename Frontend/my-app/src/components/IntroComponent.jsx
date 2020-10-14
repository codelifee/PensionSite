import React, {Component} from 'react';

class IntroComponent extends Component {
    render() {
        return(
            <>
                 <div>
                    <img src="/flower.jpg" 
                    className="img-fluid" 
                    alt="Responsive" />
                    <div className='center'>사업기도, 승진기도, 학업 성취기도, 천도, 가정성불기도</div>
                 </div> 
            </>
        )
    }
}

export default IntroComponent;