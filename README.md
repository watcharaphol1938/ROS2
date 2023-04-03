# ROS2
https://drive.google.com/file/d/1xes6B_hU-zJPYAYlC6yXcZ8h1SdLFuV7/view

https://www.vmware.com/products/workstation-player.html

https://releases.ubuntu.com/focal/

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

============ Navigation ==============
---------- Remote terminal -----------

ros2 launch ironx_bringup ironx_start.launch.py

---------- PC/Laptop terminal -----------

ros2 launch ironx_navigation navigation.launch.py map:=~/<Map_path/map's_name>

#For activate the omnidirectional

ros2 launch ironx_navigation navigation.launch.py use_omni:=true map:=~/<Map_path/map's_name>

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
