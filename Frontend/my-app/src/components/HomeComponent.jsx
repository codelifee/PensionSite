import React, {Component} from 'react';

class HomeComponent extends Component {
    render() {
        return(
            <>
                 <div>
                    <img src="/hands.jpg" 
                    className="img-fluid" 
                    alt="Responsive" />
                    <div className='top-left'>진로, 자녀, 연애, 불행</div>
                 </div> 
            </>
        )
    }
}

export default HomeComponent;