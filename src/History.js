'use strict';

import Component from 'metal-jsx';

class History extends Component {

    created() {
        const { history } = this.context.router;
        
        history.push = (to) => {
        }

        history.replace = (to) => {

        }
    }

}

export default History;
