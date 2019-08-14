class Machine extends React.Component {
	render() {
        const {s1, s2, s3} = this.props;
        const loseColor = {backgroundColor: 'rgba(255, 0, 100, 1)', textTransform: 'uppercase'}

        function showIcons() {
            const icons = ["🍇", "🍒", "🍑"];
            return `${icons[s1]}  ${icons[s2]}  ${icons[s3]}`
        };

        function didTheyWin() {
            if (s1 === s2 &&  s2 === s3){
            return <p style={{backgroundColor: 'rgba(100, 255, 100, 1)'}}>We have a winner</p>;
             } else {
              return <p style={loseColor}> You lose </p>
          }
        };
       
        
		return (
			<div className="Machine">
				{showIcons()}
                {didTheyWin()}
			</div>
		);
	}
}
