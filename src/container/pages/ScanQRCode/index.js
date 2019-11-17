import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
const IconWithText = (props) => {
	return(
		<View>
			<View style={{width:60,height:60,backgroundColor:'green',borderRadius:50}}></View>
			<Text style={{maxWidth:70, textAlign:'center',marginTop:10}}>{props.title}</Text>
		</View>
		)
}

const IconAction = () => {
	return (  
	<View style={{width:35,height:35,backgroundColor:'white',borderRadius:35}} />
	)
}

class  ScanQRCode extends React.Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back,
	  };
	
	  async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	  }
	render(){

		return(
			<View style={{flex: 1}}>
				<View style={{flex: 1,backgroundColor:'grey'}}>
				<Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>


						{/* <RNCamera
			  ref={ref => {
				this.camera = ref;
			  }}
			  style={ {
				width:'100%',
				height:'100%',
				top:0,
				left:0, 
				flex: 1,
				justifyContent: 'flex-end',
				alignItems: 'center',
			  }}
			  type={RNCamera.Constants.Type.back}
			  flashMode={RNCamera.Constants.FlashMode.on}
			  androidCameraPermissionOptions={{
				title: 'Permission to use camera',
				message: 'We need your permission to use your camera',
				buttonPositive: 'Ok',
				buttonNegative: 'Cancel',
			  }}
			  androidRecordAudioPermissionOptions={{
				title: 'Permission to use audio recording',
				message: 'We need your permission to use your audio',
				buttonPositive: 'Ok',  
				buttonNegative: 'Cancel',
			  }}
			  onGoogleVisionBarcodesDetected={({ barcodes }) => {
				console.log(barcodes);
			  }}
			/> */}
					<View style={{flexDirection:'row',paddingHorizontal:16, marginTop: 16, justifyContent:'space-between',position:'absolute',top:0,left:0,width:'100%'}}>
						<IconAction />
						<View style={{flexDirection:'row',justifyContent: 'space-between',width: 80}}>
							<IconAction />
							<IconAction />
						</View>
					</View>
				</View>
				<View style={{height: 200, backgroundColor:'white', paddingHorizontal: 16}}>
					<View style={{alignItems:'center',marginTop:8, marginBottom:18}}> 
						<View style={{width:40,height:3, backgroundColor:'#EOEOEO',marginVertical:1}}></View>
						<View style={{width:40,height:3, backgroundColor:'#EOEOEO',marginVertical:1}}></View>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
						<Text style={{fontSize: 20,fontWeight:'bold',color:'black'}}>More Options</Text>
						<Text style={{fontSize:14,color:'#61a756',fontWeight:'bold'}}>ShortCut</Text>
					</View>
					<View style={{flexDirection:'row',alignItems:'flex-start',marginTop: 14,width:'100%'}}>
						<View style={{flexDirection:'row',alignItems:'flex-start', width:160, justifyContent:'space-between',paddingRight:12}}>
							<IconWithText title="Phone Number"/>
							<IconWithText  title="Gopay Code"/>
						</View>
						<View style={{width:1, height: 60, backgroundColor:'grey'}}/>
						<View style={{flex: 1,paddingLeft:12}}>
							<Text>Your recent Gopay receivers will show here.No admin fees!</Text>
						</View>
					</View>
				</View>
			</View>
		)
	}
		
}

export default ScanQRCode;