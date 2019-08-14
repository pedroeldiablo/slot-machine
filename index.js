class App extends React.Component {
	render() {
         const slot = function() { return (Math.floor(Math.random() * 3))};

		return (
			<div>
				<Machine s1={slot()} s2={slot()}  s3={slot()} />
                <Machine s1={slot()} s2={slot()}  s3={slot()}/>
                <Machine s1={slot()} s2={slot()}  s3={slot()}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
