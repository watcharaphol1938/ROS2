# ROS 2
# Installing
#

https://www.vmware.com/products/workstation-player.html

https://releases.ubuntu.com/focal/

# 1. Set locale

locale

sudo apt update && sudo apt install locales

sudo locale-gen en_US en_US.UTF-8

sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8

export LANG=en_US.UTF-8

locale

#

# 2. Set sources

apt-cache policy | grep universe

sudo apt install software-properties-common

sudo add-apt-repository universe

sudo apt update && sudo apt install curl gnupg2 lsb-release

sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null

#

# 3. Install ROS2 packages 

sudo apt update

sudo apt upgrade

sudo apt install ros-foxy-desktop python3-rosdep2

rosdep update

#

# 4. Environment setup 

source /opt/ros/foxy/setup.bash

rosversion -d


# Secure Shell 

ping <iron-X’s ip-address>

ssh pi@<iron-X’s ip-address>

password: ironxtesr

# Download link

https://www.nomachine.com/download/linux&id=1

# Install

cd ~/Downloads

ls

sudo dpkg -i nomachine_7.10.1_1_amd64.deb

# setup ROS_DOMAIN_ID

# PC site

sudo nano ~/.bashrc

export ROS_DOMAIN_ID=99

source .bashrc

# iron-X site

ssh pi@<iron-X’s ip-address>

sudo nano ~/.bashrc

export ROS_DOMAIN_ID=99

source .bashrc

#

# add /opt/ros/foxy/setup.bash to bashrc 

echo "source /opt/ros/foxy/setup.bash" >> ~/.bashrc

# Secure shell

ssh pi@<iron-X’s ip-address>

password: ironxtesr

# iron-X's driver

# Remote Terminal

ros2 run ironx_bringup ironx_driver

# PC/Laptop Terminal

ros2 topic list

ros2 topic echo /odom

ros2 topic echo /imu

ros2 topic echo /ironx_voltage

# Keyboard&Joy
# Remote Terminal

ros2 run ironx_bringup ironx_driver

# PC/Laptop Terminal

ros2 run teleop_twist_keyboard teleop_twist_keyboard

# iron-X's bringup
# Remote Terminal

ros2 launch ironx_bringup ironx_start.launch.py

#For active the camera

ros2 launch ironx_bringup ironx_start.launch.py use_cam:=True

# PC/Laptop Terminal

ros2 topic list

rviz2

# Download source

https://drive.google.com/file/d/1xes6B_hU-zJPYAYlC6yXcZ8h1SdLFuV7/view

# create workspace and src 
(In case, you didn't have workspace)

mkdir -p ros2_ws/src

# build workspace

cd ros2_ws/
rosdep install -i --from-path src --rosdistro foxy -y

# install colcon

sudo apt install python3-colcon-common-extensions

colcon build --symlink-install
. install/setup.bash

echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc

#

# Cartographer SLAM
# Remote terminal

ros2 launch ironx_bringup ironx_start.launch.py

# PC/Laptop terminal

ros2 launch ironx_navigation cartographer.launch.py

#use Keyboard

ros2 run teleop_twist_keyboard teleop_twist_keyboard

# Save a map from SLAM
# PC/Laptop terminal

ros2 run nav2_map_server map_saver_cli -f ~/<Map_path/map's_name>

#

# Navigation
# Remote terminal

ros2 launch ironx_bringup ironx_start.launch.py

# PC/Laptop terminal

ros2 launch ironx_navigation navigation.launch.py map:=~/<Map_path/map's_name>

#For activate the omnidirectional

ros2 launch ironx_navigation navigation.launch.py use_omni:=true map:=~/<Map_path/map's_name>

#

# Camera Streaming
# On Remote Desktop(NoMachine)

Username: pi
Password: ironxtesr

ros2 launch opencv_2d_camera opencv_vdo_streaming.launch.py

# On PC/Laptop terminal

rviz2

# ironx's driver

# On Remote Desktop or Remote Terminal

ros2 run ironx_bringup ironx_driver

# On Remote Desktop

# ARUCO MARKER Tracking

ros2 launch opencv_2d_camera opencv_aruco.launch.py

# Face Tracking

ros2 launch opencv_2d_camera opencv_face_detection.launch.py

# Color Tracking

ros2 launch opencv_2d_camera opencv_color_detection.launch.py

# Lowerbody Tracking

ros2 launch opencv_2d_camera opencv_lowerbody_detection.launch.py

#

https://www.sciencedirect.com/science/article/pii/S1569190X21001271

https://www.researchgate.net/publication/346641010_A_Review_of_Recent_Advances_in_Automated_Guided_Vehicle_Technologies_Integration_Challenges_and_Research_Areas_for_5G-Based_Smart_Manufacturing_Applications

https://6river.com/what-are-automated-guided-vehicles/

https://www.anylogic.com/blog/how-to-build-a-simple-agv-charging-model-for-warehousing-and-manufacturing/

https://wewo-techmotion.com/solutions/automatic-guided-vehicle/agv-software/agv-fleet-management-software

https://ubuntu.com/blog/guide-to-autonomous-mobile-robots

#

- What is AMR?
  - Autonomous mobile robots (AMRs) are robotic vehicles that operate without the need for human control or intervention
  - หุ่นยนต์เคลื่อนที่อัตโนมัติ (AMR) เป็นยานพาหนะหุ่นยนต์ที่ดำเนินการโดยไม่จำเป็นต้องมีการควบคุมหรือแก้ไขจากมนุษย์
  - 
  - And autonomous mobile robot is a specialized robot that is able to dynamically navigate and avoid obstacles in complex industrial work environments and do not require the restriction of humans from operating in areas
  - หุ่นยนต์เคลื่อนที่อัตโนมัติเป็นหุ่นยนต์เชิงพาณิชย์ที่เฉพาะเจาะจง สามารถเดินทางและหลีกเลี่ยงอุปสรรคในสภาพแวดล้อมการทำงานอุตสาหกรรมที่ซับซ้อนได้อย่างไร้ขีดจำกัดจากมนุษย์ในการดำเนินงานในพื้นที่ดังกล่าว
  - 
  - An autonomous mobile robot is a type of robot that can understand and move through its environment independently
  - หุ่นยนต์เคลื่อนที่อัตโนมัติเป็นชนิดหนึ่งของหุ่นยนต์ที่สามารถเข้าใจและเคลื่อนที่ผ่านสิ่งแวดล้อมได้อิสระโดยไม่ต้องมีมนุษย์ควบคุมโดยตรง
  - 
  - An autonomous mobile robot, or AMR, is a robot capable of navigating its surrounding environment without human oversight
  - หุ่นยนต์เคลื่อนที่อัตโนมัติหรือ AMR เป็นหุ่นยนต์ที่สามารถเดินทางในสิ่งแวดล้อมรอบตัวได้โดยไม่ต้องมีการควบคุมจากมนุษย์
  - 
  - An autonomous mobile robot (AMR) is any robot that can understand and move through its environment without being overseen directly by an operator
  - หุ่นยนต์เคลื่อนที่อัตโนมัติหรือ AMR คือหุ่นยนต์ที่สามารถเข้าใจและเคลื่อนที่ผ่านสิ่งแวดล้อมได้อิสระโดยไม่ต้องมีผู้ควบคุมควบคุมโดยตรง
  - 
  - An autonomous mobile robot (AMR) is a robot that performs behaviors or tasks with a high degree of autonomy
  - หุ่นยนต์เคลื่อนที่อัตโนมัติหรือ AMR เป็นหุ่นยนต์ที่มีการทำพฤติกรรมหรืองานที่มีระดับความเป็นอิสระสูง
  - 
  - Autonomous mobile robot, also known as auto robot or auto boot is used to pick, transport, and sort items within manufacturing and distribution facilities without any manual intervention. This is a form of automatic guided vehicle (AGV) that can be implemented without any supporting infrastructure like wires, magnets implanted on the floor or precisely located laser targets
  - หุ่นยนต์เคลื่อนที่อัตโนมัติหรือ Auto Robot หรือ Auto Boot ใช้ในการเลือก ขนย้าย และเรียงลำดับสินค้าภายในโรงงานผลิตและศูนย์กระจายสินค้าโดยไม่ต้องมีการแทรกแซงด้วยมือ นี่เป็นรูปแบบของยานพาหนะชนิด Automatic Guided Vehicle (AGV) ที่สามารถนำมาใช้ได้โดยไม่ต้องมีโครงสร้างสนับสนุนเพิ่มเติมเช่น ลวดไฟ แม่เหล็กฝังตัวในพื้นหรือเป้าหมายเลเซอร์ที่ตั้งตำแหน่งได้อย่างแม่นยำ
  - 
  - Autonomous mobile robots serve a similar purpose to AGVs, but are fully autonomous, meaning they require no custom infrastructure (like beacons) or specialized training to operate. AMRs are typically easy to deploy, and can be re-programmed on the fly to follow new routes as needed. If AGVs are like trains running on fixed tracks, then consider AMRs like cars—able to roam and change direction at any time, while avoiding people and obstacles.
  - หุ่นยนต์เคลื่อนที่อัตโนมัติบริการทำงานเช่นเดียวกับ AGV แต่เป็นอิสระแบบเต็มรูปแบบซึ่งหมายความว่าไม่ต้องการโครงสร้างที่กำหนดเอง (เช่นจุดอ้างอิง) หรือการฝึกฝนเฉพาะทางเพื่อดำเนินการ หุ่นยนต์เคลื่อนที่อัตโนมัติทั่วไปจะง่ายต่อการใช้งานและสามารถเข้ารหัสใหม่ได้เพื่อดำเนินเส้นทางใหม่ตามต้องการ ถ้า AGV เหมือนกับรถไฟที่วิ่งบนรางคงที่ ก็คือ AMR เหมือนกับรถยนต์ สามารถเดินทางและเปลี่ยนทิศทางได้ตลอดเวลา โดยหลีกเลี่ยงคนและอุปสรรค
  - 
  - The newest breed of AMRs leverage artificial intelligence (AI), 3D cameras, and LiDAR sensors so they can operate safely not only in warehouses, but also within high-traffic locations such as retail and grocery stores, malls, airports, schools, healthcare facilities, and more. This unlocks new opportunities for public-facing businesses and their employees to use robotic automation to handle dull, dirty, and repetitive tasks, such as cleaning floors, hauling carts, or managing shelf inventory.
  - ชนิดล่าสุดของ AMRs ใช้เทคโนโลยีปัญญาประดิษฐ์ (AI) กล้อง 3 มิติและเซ็นเซอร์ LiDAR เพื่อทำให้สามารถทำงานอย่างปลอดภัยไม่เพียงแค่ในโกดังเก็บของ แต่ยังสามารถทำงานได้ในสถานที่ที่มีความหนาแน่นของคนเช่นห้างสรรพสินค้า ร้านสะดวกซื้อ ศูนย์การค้า สนามบิน โรงเรียน สถานพยาบาล และอื่น ๆ นอกจากนี้ยังเปิดโอกาสใหม่สำหรับธุรกิจที่เผชิญกับปริมาณงานที่มีความน่าเบื่อระหว่างการทำความสะอาดพื้น ขนส่งรถเข็นหรือการจัดการสินค้าในชั้นวางสินค้า เป็นต้น
  - 
  - Newer AMRs, like the ones that Brain Corp develops together with its manufacturing partners, are also characterized by intuitive user interfaces that make it easy for non-technical employees to train and use the robots, as well as near real-time operational data that can be used to verify and optimize performance.
  - AMR รุ่นใหม่ล่าสุด เช่นเดียวกับที่ Brain Corp พัฒนาขึ้นร่วมกับพันธมิตรในการผลิต มีลักษณะเชิงบริหารง่ายที่ทำให้พนักงานที่ไม่มีความชำนาญด้านเทคนิคสามารถฝึกและใช้หุ่นยนต์ได้ง่าย และยังมีข้อมูลการทำงานแบบเรียลไทม์ที่ใช้สำหรับตรวจสอบและปรับปรุงประสิทธิภาพได้ใกล้เคียงกับเวลาจริง
  - 
  - Based on the concept of smart cabinets and smart autonomous mobile robots, it has a sound AMR smart transportation system and a variety of sensing devices to provide the premium service. It has a background management system and remote control, ensuring all goods are saved and retrieved with safety. You can set when and where to deliver the goods, a new smart and innovative logistics service that collects the goods within 24 hours. In addition, a variety of identification devices equip Barcode, QRcode and RFID feature for third-party management integration to provide the most user-friendly service. The AMR-AI-Logistics Robot has the ability of cross-floor distribution, which can autonomously get the access and elevators control to reach designated floors.
  - โดยใช้แนวคิดของตู้เก็บของอัจฉริยะและหุ่นยนต์เคลื่อนที่อัตโนมัติอัจฉริยะ ระบบขนส่งอัตโนมัติอัจฉริยะด้วยเสียงและมีอุปกรณ์ตรวจจับหลายชนิดที่ให้บริการคุณภาพเยี่ยม มีระบบการจัดการพื้นหลังและการควบคุมระยะไกล เพื่อให้สินค้าทั้งหมดถูกเก็บรักษาและเรียกคืนอย่างปลอดภัย คุณสามารถตั้งค่าเวลาและสถานที่ในการส่งสินค้าได้ บริการโลจิสติกส์อัจฉริยะและนวัตกรรมใหม่ที่เก็บสินค้าภายใน 24 ชั่วโมง นอกจากนี้ยังมีอุปกรณ์ระบบระบุตัวต่างๆ เช่น Barcode, QRcode และ RFID สำหรับการบริหารจัดการโดยบุคคลภายนอก เพื่อให้บริการที่ใช้งานง่ายที่สุด หุ่นยนต์โลจิสติกส์ AMR-AI มีความสามารถในการกระจายสินค้าได้ทั้งตึก โดยสามารถเข้าถึงและควบคุมลิฟท์ได้อย่างอัตโนมัติเพื่อเข้าถึงชั้นที่กำหนดได้
- Kind of AMR?
- Structure of AMR?

#

- Topic >> Getting Know ROS
  - ROS is a actual software framework for developing systems
  - A cluster of computer
  - Used with a robotics hardware that have operating system
  - ROS's abilities
    - Tools, Standards, Conventions, Resource Sharing Platform
  - Programming Languages for ROS
    - The Best : Python, C++
    - Other : MATLAB, Julia, Lua, Java, Rust, Lisp
  - Common type of information used in robotics (ROS message type)
    - Accel, Inertia, Point, Point32, Pose, Pose2D, Quaternion, Transform, Twist, Vector3, Wrench, BatteryState, CameraInfo, CompressedImage, Image, Imu, JointState, Joy, LaserScan, PointCloud, Temperature
  - ROS community package
    - global_planner, rviz, map_server, gazebo, camera_calibration, aruco_detect, ros_control
  - Physical System/Simulation
    - Physical System uses less power or resource : Because A computer runs only robot
    - Simulation uses more power or resource : Because A computer uses a lot of resource to build simulation in computer and robot

- Topic >> Introduction to ROS2
  - Issuesfromusing ROS
    - ROS was not designed to support a system of multiple robots due to its used of a single master node.
    - ROS was designed so that the resources should be local (contains within the computer) for optimal performance.
    - The paradigm of communication was not design to support realtime operation.
    - ROS was essentially a centralized system, which is not designed to support fleet management.
  - Some of many benefits of ROS2
    - Utilize Data Distribution System instead of TCPROS
    - Support multiple operating system such as linux, Windows, and OSX
    - Launch files can be writen using Python script
  - ROS2 Distributions
    - A ROS distribution is a versioned set of ROS packages

- Topic >> Navigating Linux Terminal
  - File System & Path
    - Explains about information in file system and path
    - Example : Directory, File, Data file, Executablbe file, Path
  - Terminal & Command
    - Using command in terminal to manages file
  - Bash Programming
    - Finding a file in system. If the system can't find it will generate a new file in system

- Topic >> Using ROS2 in terminal
  - The concept of Nodes and Topics
    - Node : process
    - Topic : communication channel
    - Publisher : publish a message to a topic
    - Subcriber : subscribe a message from a topic
    - Each node shouldn't have both a publisher and a subscription
  - The concept of message
    - message is an operation command that subscriber brings it to operate
  - The concept of service
    -  1-1 communication
    -  Suitable for more private communication that happens once in a while
    -  provides service to a service client from other nodes.
  - The concept of ROS2 Parameter
    - Parameter is a constant that is associated with that particular node (ค่าคงที่ที่เกี่ยวข้องกับ node นั้นๆ)
    - It can be modified and accessed by terminal interface
  - The concept of action
    - 1-1 communication
    - Suitable for task that requirestime to complete such as planning, optimizing, navigating, etc.
    - A node can have an action server that execute an "action", then return the result to the client.
#
#Questions for ROS2

-	Data Distribution ?
-	Communication in ROS ?
  o	Transport Protocol ?
  o	TCPROS ?
  o	Discovery Center ?
  o	ใช้อย่างอื่นได้ไหม ?
-	ROS MASTER in ROS?
  o	ROS MASTER?
  o	มี ROS MASTER มากกว่า 1 ได้ไหม?
-	Data Distribution Service?
-	ROS1 VS ROS2?
  o	Similar?
  o	Difference?
-	ROS_DOMAIN_ID?
  o	ทำไมต้องมี?
  o	Other?
  o	.bashrc?
-	Simple Discovery Protocol?
  o	eProsima?
  o	ทำไมต้องมี?
  o	How?
-	Fast DDS Server?
  o	DDS?
  o	ทำไมต้องมี? ไม่มีได้มั้ย?
  o	How?
  o	ไม่เหมือน ROS MASTER? เพราะอะไร? ต่างยังไง?
  o	Optimization? ทำไมต้องทำ? ทำแล้วได้อะไร? ไม่ทำได้มั้ย?
  o	FDS? ทำไมต้องมี? ไม่มีได้มั้ย? มีอย่างอื่นแทนได้มั้ย?
  o	Network Architec	ture Using Multiple Fast Discovery Server? How to work? Important? แต่ละตัวทำอะไร?
-	Quality of Service? How to work? Important? มีความเกี่ยวข้องยังไง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	History & Depth? สำคัญ? เกี่ยวข้อง? หน้าที่? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Reliability? สำคัญ? เกี่ยวข้อง? หน้าที่? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Best Effort? How similar to UDP? Difference? หน้าที่? เกี่ยวข้อง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Reliable? How to similar to TCP? Difference? หน้าที่? เกี่ยวข้อง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Durability? Important? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
-	Concept of Robot Simulation? หน้าที่? เกี่ยวข้อง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Pose? Twist? Wrench? Appearance? หน้าที่? เกี่ยวข้อง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Rigid Body & Coordinate Frame? หน้าที่? เกี่ยวข้อง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Tracking a pose? หน้าที่? เกี่ยวข้อง? ทำไมต้องทำ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Coordinate Frame? หน้าที่? เกี่ยวข้อง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? แบ่งยังไง?
  o	Global Simulation Frame? หน้าที่? เกี่ยวข้อง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Visualizer? หน้าที่? เกี่ยวข้อง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Simulator? หน้าที่? เกี่ยวข้อง? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Transform? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? Parent or child more than 1 ?
  o	Components of a Transform? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? แบ่งยังไง?
  o	Keeping track of Transform? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Tf2? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Tf2 in reality : tf & tf_static? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Transform? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? แต่ละตัวคือ? ทำอะไร?
  o	TransformBroadcaster? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
-	Visualization? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Visualizer vs (Physics) Simulator? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Rviz2? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	robot_description? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Robot_state_publisher? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? 
    	URDF? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	The structure of {robot’s name}_description? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
-	URDF : Unifined Robotics Description Format?
-	หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Links? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Joints? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Visual? Inertial? Collision? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Joint? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? แบ่งยังไง? ใช้อะไรแบ่ง?
  o	Conjuring a box? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	3DOF RRR robot? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	From URDF to RVIZ? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	ทำไม URDF doesn’t describe what robot doing? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Joint_state_publisher? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Joint_state_publisher_gui? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Linking 2 transform trees? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Static transform broadcaster? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Connecting RVIZ with turtlesim? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
-	Robot Description & Parameters
  o	Standard Units of Measure and Coordinate Conventions? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? ใช้อะไรแบ่ง?
  o	The use of kinemetics? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Kinemetics? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Body velocity? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Wheel velocity? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Position? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
      •	Positional odometry? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	What is Odometry? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? แต่ละองค์ประกอบคือ?
  o	Differential Drive Robot? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	[name]_description? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Limitation of URDF? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Parameter? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? ทำไมใช้ไม่ได้?
    	Write every single part? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	What if? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	แต่ละองค์ประกอบ? แบ่งยังไง? ใช้อะไรแบ่ง? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
-	Xacro : XML? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	What can we do with xacro? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Xacro vs URDF similar? Difference?
  o	Performing basic arithmetics? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Defining a macro? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Using the macro? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Including another file? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Processing xacro file in command line? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Processing xacro file in Python Launch script? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Declaring a property? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Global? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Using the property? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Adding Properties? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Modelling wheels? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? แบ่งยังไง? ใช้อะไรแบ่ง?
  o	Using “if”? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Using “unless”? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Creating wheels? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Complete the mobile robot? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	What do we have so far? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Concern 1 : File Duplication? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Concern 2 : Connecting tree? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Frame Prefix? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Resolving conflict using Frame Prefix? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย? Similar? Difference?
  o	Parameters of “robot_state_publisher”? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Passing namespace as a Launch Argument? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Why can’t be appended with python string? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Can use Opaque cuz? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Modifying rviz programmatically? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
    	Why it must be python string? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?
  o	Adding namespace? หน้าที่? เกี่ยวข้อง? สำคัญ? ทำไมต้องมี? ไม่มีได้มั้ย? ใช้อย่างอื่นได้มั้ย?

