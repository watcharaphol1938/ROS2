# ROS 2

########################################################################################

https://www.vmware.com/products/workstation-player.html

https://releases.ubuntu.com/focal/

########################################################################################

=============== 1. Set locale ==================

locale

sudo apt update && sudo apt install locales

sudo locale-gen en_US en_US.UTF-8

sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8

export LANG=en_US.UTF-8

locale

================================================
=============== 2. Set sources =================

apt-cache policy | grep universe

sudo apt install software-properties-common

sudo add-apt-repository universe

sudo apt update && sudo apt install curl gnupg2 lsb-release

sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null

==================================================
============ 3. Install ROS2 packages ============

sudo apt update

sudo apt upgrade

sudo apt install ros-foxy-desktop python3-rosdep2

rosdep update

===================================================
============ 4. Environment setup =================

source /opt/ros/foxy/setup.bash

rosversion -d

================================================

#######################################################################################

======== Secure Shell ===========

ping <iron-X’s ip-address>

ssh pi@<iron-X’s ip-address>

password: ironxtesr

=========Download link===========

https://www.nomachine.com/download/linux&id=1

=================================
=========Install=================

cd ~/Downloads

ls

sudo dpkg -i nomachine_7.10.1_1_amd64.deb

==================================
======= setup ROS_DOMAIN_ID ======

============ PC site =============

sudo nano ~/.bashrc

export ROS_DOMAIN_ID=99

source .bashrc

=========== iron-X site ==========

ssh pi@<iron-X’s ip-address>

sudo nano ~/.bashrc

export ROS_DOMAIN_ID=99

source .bashrc

#####################################################################################

===== add /opt/ros/foxy/setup.bash to bashrc =====

echo "source /opt/ros/foxy/setup.bash" >> ~/.bashrc

========= Secure shell ==========

ssh pi@<iron-X’s ip-address>

password: ironxtesr

=================================

======== iron-X's driver ========
-------- Remote Terminal --------

ros2 run ironx_bringup ironx_driver

------ PC/Laptop Terminal -------

ros2 topic list

ros2 topic echo /odom

ros2 topic echo /imu

ros2 topic echo /ironx_voltage

==================================

========== Keyboard&Joy ==========
--------- Remote Terminal --------

ros2 run ironx_bringup ironx_driver

------- PC/Laptop Terminal -------

ros2 run teleop_twist_keyboard teleop_twist_keyboard

==================================

======== iron-X's bringup ========
-------- Remote Terminal ---------

ros2 launch ironx_bringup ironx_start.launch.py

#For active the camera

ros2 launch ironx_bringup ironx_start.launch.py use_cam:=True

------- PC/Laptop Terminal -------

ros2 topic list

rviz2

======== Download source =========

https://drive.google.com/file/d/1xes6B_hU-zJPYAYlC6yXcZ8h1SdLFuV7/view

*=== create workspace and src ====
(In case, you didn't have workspace)

mkdir -p ros2_ws/src

======== build workspace =========

cd ros2_ws/
rosdep install -i --from-path src --rosdistro foxy -y

==================================
======== install colcon ==========

sudo apt install python3-colcon-common-extensions

==================================
colcon build --symlink-install
. install/setup.bash

echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc

#####################################################################################

========== Cartographer SLAM ==========
----------- Remote terminal -----------

ros2 launch ironx_bringup ironx_start.launch.py

---------- PC/Laptop terminal ---------

ros2 launch ironx_navigation cartographer.launch.py

#use Keyboard

ros2 run teleop_twist_keyboard teleop_twist_keyboard

========= Save a map from SLAM ========
---------- PC/Laptop terminal ---------

ros2 run nav2_map_server map_saver_cli -f ~/<Map_path/map's_name>

##############################################################################################

============ Navigation ==============
---------- Remote terminal -----------

ros2 launch ironx_bringup ironx_start.launch.py

---------- PC/Laptop terminal -----------

ros2 launch ironx_navigation navigation.launch.py map:=~/<Map_path/map's_name>

#For activate the omnidirectional

ros2 launch ironx_navigation navigation.launch.py use_omni:=true map:=~/<Map_path/map's_name>

#################################################################################################

============= Camera Streaming ================
-------- On Remote Desktop(NoMachine) ---------
Username: pi
Password: ironxtesr

ros2 launch opencv_2d_camera opencv_vdo_streaming.launch.py

----------- On PC/Laptop terminal -------------

rviz2

===============================================

============= ironx's driver ==================
---- On Remote Desktop or Remote Terminal -----

ros2 run ironx_bringup ironx_driver

===============================================
------------ On Remote Desktop  ---------------
=========== ARUCO MARKER Tracking =============

ros2 launch opencv_2d_camera opencv_aruco.launch.py

=============== Face Tracking =================

ros2 launch opencv_2d_camera opencv_face_detection.launch.py

============== Color Tracking =================

ros2 launch opencv_2d_camera opencv_color_detection.launch.py

============= Lowerbody Tracking ==============

ros2 launch opencv_2d_camera opencv_lowerbody_detection.launch.py

######################################################################################################

https://www.sciencedirect.com/science/article/pii/S1569190X21001271

https://www.researchgate.net/publication/346641010_A_Review_of_Recent_Advances_in_Automated_Guided_Vehicle_Technologies_Integration_Challenges_and_Research_Areas_for_5G-Based_Smart_Manufacturing_Applications

https://6river.com/what-are-automated-guided-vehicles/

https://www.anylogic.com/blog/how-to-build-a-simple-agv-charging-model-for-warehousing-and-manufacturing/

https://wewo-techmotion.com/solutions/automatic-guided-vehicle/agv-software/agv-fleet-management-software

######################################################################################################

---------------------- ROS2 ----------------------

- Introduction

- Slide >> Issues from using ROS
  - ROS wasn't designed to support a system of multiple robots due to its used of a single master node
  - The paradigm of coomunication wasn't design to support realtime operation
  - ROS was designed so that the resources should be local contains within the the computer for optimal performance
  - ROS was essentially a centralized system wich isn't designed to support fleet mnagement


- Slide >> Some of many benefits of ROS2
  - Utilized Data Distribution System instead of TCPROS
  - Support multiple operating system such as linux, Windows, and OSX
  - Launch files can be writen using Python script


- Slide >> ROS2 Distro
  - ROS Package


- Slide >> Navigating Linux  Terminal


- Slide >> Linux : File System & Path
  - "Directory" : where one can keep their files or other sub-directories
  - "File" : a content that requires an extension. (.jpg, .py, .cpp)
  - "Data file" : contains data that can be read or written by an editor or other programs.
  - "Executable file" : can be executed to perform certain tasks(s)
  - "Path" : describe the location of a directory or file.


- Slide >> Common questions one should ask themselves
  - Which files does our system need?
  - How can we make sure that the system will use the correct files regardless of the computer of the computer it was installed on?
  - What should the system behave when the required file does not exist?


- Slide >> Ubuntu : Terminal & Command
  - One can execute a command in a terminal.


- Slide >> Ubuntu : Common Command
  - List all installed ROS package
    - apt list ros-humble* -- install
