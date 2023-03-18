# gui-openmct
<h1>GUI with OpenMCT and ROS2</h1>

** All other Sky360GUI Repos are obsolete although some code will be reused. **

<h3>Docker build is pending.</h3>In the meantime, you can install all necessary software on a linux ubuntu environment.

1. Install Python
2. Install ROS2 (Humble version) and all required dependencies. https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html
3. Install Node.js and NPM. They are bundled together. https://nodejs.org/en/download


<h3>ROSBRIDGE</h3>
1. ROS2 sends data in DDS packets. The web browser consumes data via TCP packets. <br>
2. Rosbridge will transform DDS to TCP so that the GUI can use the data. <br>
3. Rosbridge is bundled in the Rosbridge_Suite. https://github.com/RobotWebTools/rosbridge_suite <br>
4. Instructions to use are listed below in "OpenMCT Tutorial".


<h3>Have Data Appear on GUI Using ROS2, Rosbridge</h3>
**This is a very preliminary sample only placed here so others can get quickly up to speed.**
**For this sample, neither openmct or node.js are needed. You only need ROS2 and python already installed. This demo will create a topic on the fly. You will not need to individually code a topic or ros2 node for this example.**

    <h4>INSTRUCTIONS</h4>
    **You can clone this repo on your desktop. 
    1. open index.html file (located in skygui folder) in browser
    2. in terminal make sure you have "sudo apt-get install ros-humble-rosbridge-*" You'll only need to do this once. You can open the terminal from desktop, from within the main folder or anywhere. 
    3. in terminal type: "source /opt/ros/humble/setup.sh" and then "ros2 launch rosbridge_server rosbridge_websocket_launch.xml"
    4. in a 2nd terminal, run 'source': source /opt/ros/humble/setup.bash
    5. in the same 2nd termal run: ros2 topic pub /my_topic std_msgs/String "data: 'helllllo world'"
    ALTERNATIVELY YOU CAN USE ANOTHER TOPIC JUST CHANGE THE NAME IN THE OBJ FILE 'my_topic_listener" to
     '/topic" and use 'ros2 topic pub /topic std_msgs/String "data: 'what's up?'"
     
 
<h3>Openmct-Tutorial</h3>
**OpenMCT folder is included as the base folder to build off of for the project. It contains the base material for us to get started.**
