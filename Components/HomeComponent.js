import React from 'react';
import ActivityWaiter from '../activityWaiter';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pass: true,
      username: 'axfood',
      passWord: 'axfood@123',

      isLoading: false,
    };
  }
  componentDidMount() {
    console.log('component Did Mount');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Derived called, Props: ', props);
  }

  signInHandler() {
    this.props.isAuthenticatedUser(this.state.username, this.state.passWord).then(
      resolve => {
        if (resolve == 'Resolved') {
          this.setState({isLoading: false});
          this.props.navigation.navigate('Profile');
        }
      },
      reject => {
        if (reject == 403) {
          alert('Wrong Credentials ');
          this.setState({isLoading: false});
        } else {
          alert('Server Error');
          this.setState({isLoading: false});

        }
      },
    );
  }
  componentDidUpdate() {
    console.log('--------------UPDATE------------');
  }

  render() {
    const {pass, isLoading} = this.state;

    console.log('render: ');

    return isLoading ? (
      <ActivityWaiter />
    ) : (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 0.1,
              padding: 20,

              justifyContent: 'center',
            }}>
            <Text
              style={{alignSelf: 'center', fontSize: 25, fontWeight: '400'}}>
              SIGN IN
            </Text>
          </View>

          <View style={{flex: 0.9}}>
            <TextInput
              style={{...style.textInputFields, marginRight: 15}}
              placeholder={'Your Email Address'}
              keyboardType={'email-address'}
              defaultValue={'axfood'}
              onChangeText={text => this.setState({username: text})}
            />

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{
                  ...style.textInputFields,
                  flex: 0.8,
                  borderRightWidth: 0,
                }}
                placeholder={'password'}
                secureTextEntry={pass}
                defaultValue={'axfood@123'}
                onChangeText={text => this.setState({passWord: text})}
              />
              <View style={style.showHidePassword}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({pass: !pass});
                  }}>
                  <Text style={{fontSize: 16}}>{pass ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity>
              <Text style={style.forPass}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={{height: 20}} />
            <TouchableOpacity
              onPress={() => {
                this.signInHandler();

                this.setState({isLoading: true});
              }}>
              <View
                style={{
                  ...style.textInputFields,
                  ...style.SignInView,
                }}>
                <Text style={style.signInTextStyling}>Sign In</Text>
              </View>
            </TouchableOpacity>

            <View style={{height: 50}} />

            <Text style={{alignSelf: 'center', fontSize: 13, color: '#484d4c'}}>
              or Sign In via
            </Text>

            {/* FB GOOGLE LOGIN VIEW    */}

            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <View>
                <View
                  style={{
                    ...style.fbGoogleView,
                  }}>
                  <View style={{flex: 1}}>
                    <TouchableOpacity>
                      <View style={{...style.fbView, marginRight: 8}}>
                        <View style={{flex: 4}}>
                          <Image
                            source={require('../assets/facebook.png')}
                            style={style.fbImage}
                          />
                        </View>
                        <Text style={style.textFB}> Facebook</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={{flex: 1}}>
                    <TouchableOpacity>
                      <View
                        style={{
                          ...style.fbView,

                          marginLeft: 8,
                        }}>
                        <Image
                          source={require('../assets/google.png')}
                          style={style.googleImage}
                        />
                        <Text style={style.textFB}> Google</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={style.lowerPanel}>
                <TextInput style={style.horizontalRule} />
                <View style={style.lowerPanelView}>
                  <Text style={style.lowerPanelTextStyling}>
                    Don't have an account?
                  </Text>
                  <Text style={{fontSize: 15, marginHorizontal: 10}}>
                    {' '}
                    Join
                  </Text>
                </View>

                <TextInput style={style.horizontalRule} />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  textInputFields: {
    height: 50,
    marginLeft: 15,
    borderColor: '#e3dddc',
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 8,
  },
  bottomBorder: {borderBottomWidth: 4, borderColor: '#f7ce6d', flex: 3},
  googleImage: {
    flex: 6,
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 25,
  },

  forPass: {
    fontSize: 13,
    fontWeight: '400',
    alignSelf: 'center',
    marginVertical: 14,
  },

  indicatorstyling: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  fbImage: {
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  safeAreaStyle: {backgroundColor: '#fff', flex: 1},
  showHidePassword: {
    flex: 0.2,
    height: 50,
    borderLeftWidth: 0,
    marginRight: 15,
    borderColor: '#e3dddc',
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textFB: {flex: 7, fontSize: 20},

  signInTextStyling: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
  },

  fbGoogleView: {flexDirection: 'row', marginHorizontal: 15, marginVertical: 5},
  lowerPanel: {
    backgroundColor: '#f2ede9',
    justifyContent: 'flex-end',
  },
  horizontalRule: {
    borderColor: '#cfccc8',
    borderWidth: 0.6,
    height: 1,
    //   alignSelf:"flex-end"
  },
  lowerPanelTextStyling: {
    fontSize: 15,
    color: '#6b6967',
    marginHorizontal: 10,
  },

  fbView: {
    height: 50,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  SignInView: {
    backgroundColor: '#000',
    justifyContent: 'center',
    marginRight: 15,
  },
  infoText: {padding: 2},
  lowerPanelView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 22,
  },
});
export default HomeComponent;
