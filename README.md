# gui-openmct
<h1>GUI with OpenMCT and ROS2</h1>

** All other Sky360GUI Repos are obsolete although some code will be reused. **
<h3>Docker Build</h3>
You will need to build from two seperate repositories from github.com/Sky360-Repository.
<br><br><br>
I. Instructions:<br><br>
A. simpletracker repo:
git clone -b gui_videostream https://github.com/Sky360-Repository/simpletracker-ros2-ws/
<br>
The commands below should be used to get this ROS package up and running in VSCode and using the ROS dev container
1. cd simpletracer-ros2-ws [open this file in VS Code.]
2. code . [Type this in VS Code's terminal. 
3. Restart in Dev container [popup box on lower right of VS Code Terminal. Click on Dev Container.n This may take a few minutes.]
4. ./setup.sh [Type in VS Code's terminal. This step is needed only once.]
5. ./build.sh  [Type this in VS Code's terminal.] 
6. ./launch.sh   [Type this in VS Code's terminal.] 
<br><br>
switch to another shell in simpletracker container<br>
start rosbridge_server:<br>
ros2 launch rosbridge_server rosbridge_websocket.launch [or type: ros2 launch rosbridge_server rosbridge_websocket_launch.xml  -depends on your files in your ros2 install]<br>
ros2 launch rosbridge_server rosbridge_websocket.launch<br>
<br><br>
switch to another shell in simpletracker container<br>
check if messages are being sent:<br>
ros2 topic echo /sky360/frames/annotated/compressed --no-arr
<br><br><br>
B. gui-openmct repo:<br>
Clone this folder at the same level as the simpletracker repo
1. git clone -b gui_videostream https://github.com/Sky360-Repository/gui-openmct/<br>
2. cd gui-openmct
3. code .   [This step may take several minutes.]
4. Restart in Dev Container
5. cd gui-openmct/example-server
6. node server.js [or npm start]?



=====================================================================================================
THE FOLLOWING IS DEPRECATED.  SAVED HERE AS A RECORD AND FOR INFO.
<h3><em>Deprecated Install Instructions without Docker</em></h3>
1. Install Python
2. Install ROS2 (Humble version) and all required dependencies. https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html
3. Install Node.js and NPM. They are bundled together. https://nodejs.org/en/download


<h3>II. ROSBRIDGE</h3>
1. ROS2 sends data via Data Distribution Service (DDS) https://docs.ros.org/en/humble/Installation/DDS-Implementations.html The web browser consumes data via TCP packets. <br>
2. Rosbridge will transform DDS to TCP so that the GUI can use the data as a json object. <br>
3. Rosbridge is bundled in the Rosbridge_Suite. https://github.com/RobotWebTools/rosbridge_suite <br>
4. Instructions to use Rosbridge are listed below in "Have Data Appear on GUI Using ROS2, Rosbridge".


<h3>III. Have Data Appear on GUI Using ROS2, Rosbridge</h3>
**This is a very preliminary sample only placed here so others can get quickly up to speed and see how ROS2 and the GUI can transmit data**
**For this sample, neither openmct nor node.js are needed. You only need ROS2 and python already installed. This demo will create a topic on the fly. You will not need to individually code a topic or ros2 node for this example.**

<h4>INSTRUCTIONS</h4>
    **You can clone this repo on your desktop.**<br>
    
1. open index.html file (located in skygui folder) in browser.<br>

2. in terminal make sure you have "sudo apt-get install ros-humble-rosbridge-*" 
    You'll only need to do this once. You can open the terminal from desktop, from within the main folder or anywhere.<br>
     
3. in terminal type: "source /opt/ros/humble/setup.sh" and then "ros2 launch rosbridge_server rosbridge_websocket_launch.xml"<br>

4. in a 2nd terminal, run 'source': source /opt/ros/humble/setup.bash <br>

5. in the same 2nd termal run: ros2 topic pub /my_topic std_msgs/String "data: 'hello world'"
<br>
    ALTERNATIVELY YOU CAN USE ANOTHER TOPIC JUST CHANGE THE NAME IN THE OBJ FILE 'my_topic_listener" to
     '/topic" and use 'ros2 topic pub /topic std_msgs/String "data: 'hello world'"<br>
     
 
<h3>IV. Openmct-Tutorial / Base GUI Folder</h3>
**OpenMCT Tutorial folder is included as the base folder to build off of for the project. It contains the base material for us to get started.**<br>

1. The folder is labled 'gui-openmct'. <br>
2. Using terminal, CD into that folder and type 'npm install' and once it is finished install all node packages, type 'npm start'. <br>
3. Then in the browser, type 'localhost:8080' and you should see the openmct GUI. <br> 


These directions are also located in the ReadMe located in the 'gui-openmct' folder.


<h3>V. ROS2 Nodes and Topics</h3>
ROS2 Nodes will be placed in this folder. Put them in the appropriate folder on your computer. In the meantime, I will add ROS2 within this repo.


<h3>V. Set Up ROS2 Network Over Multiple Machines</h3>
I refer you to this excellent article: 
https://roboticsbackend.com/ros2-multiple-machines-including-raspberry-pi/

