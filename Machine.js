class Machine extends React.Component {
	render() {
        const props = this.props;

        function didTheyWin(props) {
            if (props.s1 === props.s2 &&  props.s2 === props.s3){
            return <p> We have a winner</p>;
             } else {
              return <p> You lose </p>
          }
        };
       
        
		return (
			<div>
				<p>{props.s1}{props.s2}{props.s3}</p>
                {didTheyWin(props)}
			</div>
		);
	}
}
