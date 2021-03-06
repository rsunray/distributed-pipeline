	import React from 'react';
	import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
	import FlatButton from 'material-ui/FlatButton';
	import Toggle from 'material-ui/Toggle';
	import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

	class Eslint extends React.Component {

	  constructor(props) {
	    super(props);

			this.state = {data:this.props.res};
	  }

		componentWillReceiveProps(nextProps){
			console.log(nextProps.res);
			this.setState({data:nextProps.res})
		}
	  render() {
			console.log(this.state.data);
			if (this.state.data.status === 'Complete')
					var avatar = "../jsx/images/avatar1.jpeg";
			else   if (this.state.data.status === 'Failed')
					var avatar = "../jsx/images/avatar2.jpeg";
			else if(this.state.data.status==='Blocked')
					var avatar="../jsx/images/block.png";
			else {
				var avatar="../jsx/images/pending.png";
			}
	    return (
	      <Card >
	        <CardHeader
	          title="Eslint"
	          avatar={avatar}
						subtitle={this.state.data.status}
	          actAsExpander={true}
	          showExpandableButton={true}
	        />
	        <CardText expandable={true}>

					<h4>ExitCode:</h4><div><pre>{this.state.data.exitCode}</pre></div><br/>
						<h4>Initialized@:</h4><div><pre>{this.state.data.initialized}</pre></div><br />
						<h4>Errors:</h4><div><pre>{this.state.data.stderr}</pre></div><br />

	        <br/>
					<div>
						{(this.state.data.stdout!=undefined)?
						(
					(typeof this.state.data.stdout === 'string')?
											(
													<div><h4>Output</h4><pre>{this.state.data.stdout}</pre></div>
											):(
												<Table showCheckbox={false}>
	 					<TableHeader displaySelectAll={false} adjustForCheckbox={false} >
		 				<TableRow>
			 				<TableHeaderColumn>filePath</TableHeaderColumn>
			 				<TableHeaderColumn>errorCount</TableHeaderColumn>
							<TableHeaderColumn>warningCount</TableHeaderColumn>
							<TableHeaderColumn>Status</TableHeaderColumn>
		 				</TableRow>
	 					</TableHeader>
						 <TableBody showRowHover={true} displayRowCheckbox={false}>
						{this.state.data.stdout.map((tile) => (
			 <TableRow>
				 <TableRowColumn> {tile[Object.keys(tile)[0]]}</TableRowColumn>
				 <TableRowColumn> {tile[Object.keys(tile)[2]]}</TableRowColumn>
				 <TableRowColumn> {tile[Object.keys(tile)[3]]}</TableRowColumn>
				 <TableRowColumn> {(tile[Object.keys(tile)[2]]==0 && tile[Object.keys(tile)[3]]==0)?
					 (<div><img src="../jsx/images/passStat.png"></img></div>):(tile[Object.keys(tile)[2]]>0)?(<div><img src="../jsx/images/errorStat.jpg"></img></div>):(tile[Object.keys(tile)[3]]>0)?(<div><img src="../jsx/images/warning.jpg"></img></div>):(<div><img src="../jsx/images/warning.jpg"></img></div>)}</TableRowColumn>
			 </TableRow>

		 ))}
		 	 </TableBody>
	 </Table>
						 )
					 ):(
						 <div><h4>Output</h4><pre></pre></div>
					 )}

					</div>
	        </CardText>
	      </Card>
	    );

	  }
	}

	export default Eslint;
