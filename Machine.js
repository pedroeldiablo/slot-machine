class Machine extends React.Component {
	render() {
        const {s1, s2, s3} = this.props;

        function showIcons() {
            const icons = ["🍇", "🍒", "🍑"];
            return `${icons[s1]}  ${icons[s2]}  ${icons[s3]}`
        };

        function didTheyWin() {
            if (s1 === s2 &&  s2 === s3){
            return <p>We have a winner</p>;
             } else {
              return <p> You lose </p>
          }
        };
       
        
		return (
			<div>
				{showIcons()}
                {didTheyWin()}
			</div>
		);
	}
}
