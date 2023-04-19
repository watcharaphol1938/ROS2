# ROS 2
# Installing

https://www.vmware.com/products/workstation-player.html

https://releases.ubuntu.com/focal/

# 1. Set locale

locale

sudo apt update && sudo apt install locales

sudo locale-gen en_US en_US.UTF-8

sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8

export LANG=en_US.UTF-8

locale

# 2. Set sources

apt-cache policy | grep universe

sudo apt install software-properties-common

sudo add-apt-repository universe

sudo apt update && sudo apt install curl gnupg2 lsb-release

sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null

# 3. Install ROS2 packages 

sudo apt update

sudo apt upgrade

sudo apt install ros-foxy-desktop python3-rosdep2

rosdep update

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

# Navigation
# Remote terminal

ros2 launch ironx_bringup ironx_start.launch.py

# PC/Laptop terminal

ros2 launch ironx_navigation navigation.launch.py map:=~/<Map_path/map's_name>

#For activate the omnidirectional

ros2 launch ironx_navigation navigation.launch.py use_omni:=true map:=~/<Map_path/map's_name>

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

# ROS2
# Lecture 1 : ROS2 Fundamentals
- Topic >> Getting Know ROS
  - ROS is an actual software framework for developing systems
    - ROS เป็นกรอบโครงสร้าง software ที่ใช้ในการพัฒนาระบบ
  - A cluster of computer
    - เป็นกลุ่มของคอมพิวเตอร์
  - Used with a robotics hardware that have operating system
    - ถูกใช้กับ hardware robotics ที่มีระบบปฏิบัติการ
  - ROS's abilities
    - ความสามารถของ ROS
    - Tools, Standards, Conventions, Resource Sharing Platform
      - เครื่องมือ, ความมาตรฐาน, กติกา, แพล็ตฟอร์มการแบ่งปันทรัพยากร
  - Programming Languages for ROS
    - ภาษาโปรแกรมสำหรับ ROS
    - The Best : Python, C++
      - ดีที่สุด : Python, C++
    - Other : MATLAB, Julia, Lua, Java, Rust, Lisp
      - อื่นๆ : MATLAB, Julia, Lua, Java, Rust, Lisp
  - Common type of information used in robotics (ROS message type)
    - ชนิดของข้อมูลทั่วไปที่ถูกใช้ใน robotics (ชนิดข้อมความของ ROS)
    - Accel, Inertia, Point, Point32, Pose, Pose2D, Quaternion, Transform, Twist, Vector3, Wrench, BatteryState, CameraInfo, CompressedImage, Image, Imu, JointState, Joy, LaserScan, PointCloud, Temperature
  - ROS community package
    - package ของ ROS
    - global_planner, rviz, map_server, gazebo, camera_calibration, aruco_detect, ros_control
  - Physical System/Simulation
    - ระบบทางกายภาพ/การจำลอง
    - Physical System uses less power or resource : Because A computer runs only robot
      - ระบบทางกายภาพใช้พลังงานหรือทรัพยากรน้อย เพราะคอมพิวเตอร์จะรันการทำงานของหุ่นยนต์เท่านั้น
    - Simulation uses more power or resource : Because A computer uses a lot of resource to build simulation in computer and robot
      - การจำลองใช้พลังงานหรือทรัพยากรเยอะ เพราะคอมพิวเตอร์จะใช้ทรัพยาเยอะในการจำลองหุ่นยนต์ในคอมพิวเตอร์และการรันหุ่นยนต์

- Topic >> Introduction to ROS2
  - Issues from using ROS
    - ปัญหาจากการใช้ ROS
    - ROS was not designed to support a system of multiple robots due to its used of a single master node.
      - ROS ไม่ได้ถูกออกแบบมาเพื่อสนับสนุนหุ่นยนต์หลายตัว เพราะมันใช้โหลดหลักแค่ตัวเดียว
    - ROS was designed so that the resources should be local (contains within the computer) for optimal performance.
      - ROS ถูกออกแบบให้มีทรัพยากรอยู่ในคอมพิวเตอร์เพื่อให้มีประสิทธิภาพสูงสุด
    - The paradigm of communication was not design to support real time operation.
      - รูปแบบการสื่อสารไม่ได้ถูกออกแบบเพื่อรองรับการทำงานแบบ real-time
    - ROS was essentially a centralized system, which is not designed to support fleet management.
      - ROS เป็นระบบที่มีการควบคุมแบบกลาง ซึ่งไม่ได้ถูกออกแบบมาเพื่อรองรับการจัดการกลุ่มหุ่นยนต์
  - Some of many benefits of ROS2
    - ประโยชน์บางส่วนของ ROS
    - Utilize Data Distribution System instead of TCPROS
      - ใช้ระบบกระจายข้อมูลแทน TCPROS
    - Support multiple operating system such as linux, Windows, and OSX
      - สนับสนุนหลายระบบปฏิบัติการ
    - Launch files can be writen using Python script
      - ไฟล์ launch เขียนได้โดยใช้ Python script
  - ROS2 Distributions
    - การกระจายของ ROS2
    - A ROS distribution is a versioned set of ROS packages
      - การกระจายของ ROS เป็นชุด version ของ ROS packages

- Topic >> Navigating Linux Terminal
  - File System & Path
    - ไฟล์ระบบและ path
    - Explains about information in file system and path
      - อธิบายเกี่ยวกับข้อมูลไฟล์ของระบบและ path
    - Example : Directory, File, Data file, Executablbe file, Path
      - โฟลเดอร์, ไฟล์, ไฟล์ข้อมูล, ไฟล์ที่สามารถรันได้, path
  - Terminal & Command
    - Using command in terminal to manages file
      - การใช้คำสั่งใน terminal ในการจัดการไฟล์
  - Bash Programming
    - Finding a file in system. If the system can't find it will generate a new file in system
      - การหาไฟล์ในระบบ ถ้าระบบค้นหาไม่เจอ ก็จะสร้างไฟล์ใหม่ขึ้นมา

- Topic >> Using ROS2 in terminal
  - การใช้ ROS2 ใน terminal
  - The concept of Nodes and Topics
    - Node : process
    - Topic : communication channel
    - Publisher : publish a message to a topic
      - publisher เป็นตัวส่งข้อความไปที่ topic
    - Subcriber : subscribe a message from a topic
      - subcriber เป็นตัวรับข้อความจาก topic
    - Each node shouldn't have both a publisher and a subscription
      - แต่ละโหนดไม่ควรเป็นทั้ง publisher และ subscriber ในตัวเดียวกัน
  - The concept of message
    - message is an operation command that subscriber brings it to operate
    - ข้อความเป็นคำสั่งการดำเนินการที่ subscriber นำไปใช้ในการดำเนินการ
  - The concept of service
    -  1-1 communication
      - การสื่อสารแบบ 1-1
    -  Suitable for more private communication that happens once in a while
      - เหมาะกับการสื่อสารแบบส่วนตัวที่เกิดขึ้นบางครั้ง
    -  provides service to a service client from other nodes.
      - ให้บริการกับ client จากโหนดอื่นๆ
  - The concept of ROS2 Parameter
    - Parameter is a constant that is associated with that particular node
      - parameter ค่าคงที่ที่เกี่ยวข้องกับ node นั้นๆ
    - It can be modified and accessed by terminal interface
      - สามารถแก้ไขและเข้าถึงผ่าน interface ทางคำสั่ง terminal ได้
  - The concept of action
    - 1-1 communication
      - การสื่อสารแบบ 1-1
    - Suitable for task that requires time to complete such as planning, optimizing, navigating, etc.
       -  เหมาะสำหรับงานที่ต้องใช้เวลาในการดำเนินการ เช่น การวางแผน การปรับปรุงประสิทธิภาพ การนำทาง เป็นต้น
    - A node can have an action server that execute an "action", then return the result to the client.
      - โหนดสามารถมี action server ที่ดำเนินการ "action" แล้วส่งผลลัพธ์กลับไปยัง client ได้
  - Using existing system with ROS2
    - การใช้ระบบที่มีอยู่แล้วกับ ROS2
    - Given existing ROS2 packages, we can now know how to execute some of their functionalities via terminal command.
      - จากแพ็กเกจ ROS2 ที่มีอยู่แล้ว เราสามารถรู้วิธีการดำเนินการบางส่วนของฟังก์ชันผ่านคำสั่งทาง terminal

- Topic >> ROS2 Package Customization
  - The concept of Package
    - Package is a collection of organized files in a form of directory, which will used to "synthesize" nodes, launch system, etc. (usually for a specific task)
      - แพ็กเกจคือการรวมไฟล์ที่มีการจัดเรียงแบบเป็นระบบเข้าด้วยกันในรูปแบบของไดเรกทอรี ซึ่งจะถูกนำมาใช้ในการ "สังเคราะห์" โหนด (nodes) ระบบเปิด (launch system) ฯลฯ (โดยมักจะใช้สำหรับงานที่เฉพาะเจาะจง)
    - An anology of a package would be a folder where we can keep all blue prints of a house but not the house itself.
      - การอธิบายแพ็กเกจโดยใช้สมมติฐานเป็นการเปรียบเทียบกับโฟลเดอร์ที่เราสามารถเก็บแบบแผนทั้งหมดหรือโครงสร้างที่ใช้สร้างระบบหรือแอปพลิเคชันไว้ในนั้น แต่ไม่ใช่ตัวแอปพลิเคชันหรือระบบ
  -  Source folder (src)
    - "src" directory is where we put all custom packages together.
      - โฟลเดอร์ "src" เป็นที่เก็บแพ็กเกจที่เราสร้างขึ้นเองทั้งหมดใน ROS โดยเฉพาะ โดยทั่วไปแล้วเราจะสร้างแพ็กเกจขึ้นมาเองเมื่อต้องการเพิ่มฟังก์ชั่นเสริมใน ROS ที่ไม่มีให้ในแพ็กเกจพื้นฐาน หรือเพื่อปรับแต่งแพ็กเกจที่มีอยู่เพื่อให้ตอบสนองกับความต้องการของโปรแกรมที่เราพัฒนา ดังนั้น "src" เป็นโฟลเดอร์ที่สำคัญในการพัฒนา ROS และใช้เก็บแพ็กเกจที่เราสร้างขึ้นเองทั้งหมดใน ROS
    - A package can be put inside another folder, which can be referred as a meta-package.
      - แพ็กเกจสามารถเก็บไว้ภายในโฟลเดอร์อื่นได้ โดยที่โฟลเดอร์นั้นจะเรียกว่า "meta-package" ซึ่งเป็นการจัดเก็บแพ็กเกจที่เกี่ยวข้องกันด้วยกันไว้ในโฟลเดอร์เดียวกันเพื่อความสะดวกในการจัดการ และบางครั้งเราอาจใช้แพ็กเกจ meta-package เพื่อทำการติดตั้งแพ็กเกจต่าง ๆ ที่เกี่ยวข้องกันในครั้งเดียวกัน อย่างไรก็ตามใน ROS 2 นั้นแนะนำให้ใช้งานโครงสร้างของ multi-package แทน meta-package
    - The concept of Workspace
      - workspace is where we put every custom packages for a project.
        - Workspace คือพื้นที่ที่เราใช้สำหรับเก็บแพ็กเกจทั้งหมดที่เกี่ยวข้องกับโปรเจกต์ใน ROS 2 โดย Workspace ประกอบด้วยโฟลเดอร์หลักสองโฟลเดอร์ คือ src และ install โฟลเดอร์ src เป็นที่เก็บโค้ดและแพ็กเกจที่เราพัฒนาขึ้นมาเอง และโฟลเดอร์ install เป็นที่เก็บแพ็กเกจที่ติดตั้งเพื่อให้โปรแกรม ROS 2 ทำงานได้ โดย Workspace มักถูกแบ่งออกเป็น Workspace เดี่ยวหรือ Multi-Workspace โดย Multi-Workspace จะใช้สำหรับการพัฒนาโปรเจกต์ที่มีหลาย Workspace ที่ต้องทำงานร่วมกัน
    - Build System
      - "colcon build" command will build every packages in the source directory and generate 3 additional directories. When modify "src", always re-build these 3 directories. (with an exception of using symlink install)
        - คำสั่ง "colcon build" จะทำการสร้างแพ็กเกจทั้งหมดที่อยู่ในโฟลเดอร์ src และสร้างโฟลเดอร์เพิ่มเติมอีก 3 โฟลเดอร์คือ build, install, และ log โดยโฟลเดอร์ build เป็นที่เก็บไฟล์ที่ถูกคอมไพล์ โฟลเดอร์ install เป็นที่เก็บแพ็กเกจที่ติดตั้งและใช้ในการรันโปรแกรม และโฟลเดอร์ log เป็นที่เก็บไฟล์ log ที่เกี่ยวข้องกับการทำงานของแต่ละแพ็กเกจ
เมื่อเราทำการแก้ไขโค้ดในโฟลเดอร์ src ให้ใช้คำสั่ง "colcon build" เพื่อสร้างแพ็กเกจใหม่ทั้งหมด พร้อมกับการอัปเดตโฟลเดอร์ build และ install เพื่อให้โปรแกรม ROS 2 ทำงานได้อย่างถูกต้อง โดยมีข้อยกเว้นว่าถ้าเราใช้ symlink install จะไม่ต้อง build install ใหม่ทุกครั้งที่แก้ไขโค้ดในโฟลเดอร์ src แต่ต้องทำการลิงค์โฟลเดอร์ install กับโฟลเดอร์ build ก่อนเพื่อให้โปรแกรม ROS 2 ใช้ไฟล์แพ็กเกจล่าสุดที่ถูกอัปเดต
      - "Install" directory is the location of codes that will be used by the ROS2 system. Therefore, only modifying "src" will not change the behavior of your system in run time.
        - โฟลเดอร์ "install" เป็นตำแหน่งที่จะเก็บรหัสที่จะถูกใช้โดยระบบ ROS2 ดังนั้นการแก้ไขเฉพาะ "src" จะไม่สามารถเปลี่ยนแปลงพฤติกรรมของระบบในเวลาเรียลไทม์ได้ จะต้องสร้างแพ็คเกจใหม่และอัปเดตโฟลเดอร์ "install" โดยใช้คำสั่ง "colcon build" เพื่อนำการเปลี่ยนแปลงมาใช้ในการทำงานของระบบในเวลาเรียลไทม์
      - You must not create workspace inside another workspace
        - คุณต้องไม่สร้าง workspace ภายใน workspace อื่น ๆ
    - Creating a new workspace
      - การสร้าง workspace ใหม่
      - Create and build a new workspace
        - สร้างและ build workspace อันใหม่
        - >> mkdir –p ~/[xxx]_ws/src, >> cd ~/[xxx]_ws, >> colcon build
      - Adding workspace to .bashrc
        - source ~/[xxx]_ws/install/local_setup.bash
      - Creating a ROS Package
        - for python
          - >> cd ~/[xxx]_ws/src, >> ros2 pkg create --build-type ament_python [package_name]
        - for C++
          - >> cd ~/[xxx]_ws/src, >> ros2 pkg create --build-type ament_cmake [package_name]
        - The package that we create must be in the src directory of our workspace.
        - แพ็กเกจที่เราสร้างต้องอยู่ในโฟลเดอร์ src ของ workspace ของเรา
      - Creating my_first_pkg
        - >> cd ~/[xxx]_ws/src, >> ros2 pkg create --build-type ament_python my_first_pkg, >> cd .., >> colcon build --packages-select my_first_pkg, >> cd src/my_first_pkg, >> code package.xml, >> cd my_first_pkg, >> code my_first_script.py
      - Structure of CMakeLists.txt for building a package
      
- Topic >> ROS2 Node Programming with RCLPY
  - การเขียนโปรแกรม Node ใน ROS2 ด้วย RCLPY
  - Node class in ROS Client Library for Python (RCLPY)
    - คลาส Node ในไลบรารี ROS Client สำหรับ Python (RCLPY)
  - General procedure on "running" a node using RCLPY
    - ขั้นตอนทั่วไปในการ "รัน" node โดยใช้ RCLPY
    - เริ่มต้น rclpy โดยใช้ 'rclpy.init'
    - สร้างออบเจ็กต์ "Node"
    - เริ่มการทำงานของ node โดยใช้ rclpy.spin หรือ spin อยู่ใน while-loop
    - หากกระบวนการสิ้นสุดลูป ให้ยกเลิกการสร้างออบเจ็กต์ของ Node
    - ปิดการใช้งาน rclpy โดยใช้ rclpy.shutdown"
  - Inheriting a Node classfrom RCLPY
    - การสืบทอดคลาส Node จาก RCLPY
- Topic >> Timer, Publisher, & Subscription
  - Attaching a timerto the node
    - การเชื่อมต่อตัวตั้งเวลากับโหนด
  - Attaching a publisher and publishing a message in a timer
    - เพื่อที่จะทำการ attach publisher และ publish message โดยมีการใช้ timer
  - Attaching a subscription and its callback
    - การ attach subscription และ callback
  - Finite State Machine
    - Finite State Machine (FSM) หรือเครื่องกำหนดสถานะจำกัดคือแบบจำลองทางคณิตศาสตร์ที่ประกอบด้วยสถานะ (state) ที่มีการเปลี่ยนแปลงตามกฎหรือเหตุการณ์ที่เกิดขึ้น และมีการระบุสถานะเริ่มต้น (initial state) และสถานะปลาย (final state) เพื่อบอกว่าเครื่องกำหนดสถานะจำกัดจะจบการทำงานเมื่อเข้าสถานะปลาย
FSM มักใช้ในการออกแบบการทำงานของระบบและโปรแกรมที่มีลำดับขั้นตอนและมีการตรวจสอบเงื่อนไขในแต่ละขั้นตอน โดยสามารถแบ่งสถานะและเหตุการณ์เป็นกลุ่ม เช่น สถานะของเครื่อง ATM อาจเป็น "รอให้ผู้ใช้ป้อนรหัส PIN", "รอให้ผู้ใช้เลือกบริการ", "กำลังดำเนินการเบิกเงิน" เป็นต้น และเหตุการณ์อาจเป็น "ผู้ใช้ป้อนรหัส PIN ผิด", "ผู้ใช้เลือกบริการเบิกเงิน", "การดำเนินการเบิกเงินสำเร็จ" เป็นต้น

- Topic >> Object-Oriented Programming
  - Object-Oriented Programming (OOP) หรือการเขียนโปรแกรมเชิงวัตถุ เป็นแนวคิดในการเขียนโปรแกรมที่มุ่งเน้นการจัดการกับ Object หรืออ็อบเจ็กต์ซึ่งเป็นสิ่งมีชีวิตเสมือนในโลกจริง โดย Object จะมีคุณสมบัติ (property) และพฤติกรรม (behavior) เช่นเดียวกับสิ่งที่เราเห็นรอบตัว เช่น แมวจะมีคุณสมบัติเช่น สีของขน น้ำหนัก อายุ และพฤติกรรมเช่น การเดิน การร้องเพลง เป็นต้น
ใน OOP จะมีคอนเซปต์เบื้องต้นคือคลาส (Class) ซึ่งจะถูกนิยามโดยคุณสมบัติและพฤติกรรมของ Object ที่เราต้องการสร้างขึ้น เราสามารถสร้าง Object จากคลาสได้หลายตัว โดยแต่ละ Object จะมีคุณสมบัติและพฤติกรรมที่แตกต่างกันไปได้
การเขียนโปรแกรมเชิงวัตถุจะมีพื้นฐานหลัก 4 อย่าง ได้แก่ Encapsulation (การซ่อนรายละเอียด), Inheritance (การสืบทอดคุณสมบัติ), Polymorphism (การแสดงพฤติกรรมหลายรูปแบบ) และ Abstraction (การบอกถึงคุณสมบัติที่สำคัญ)
  - Shared Features & Functionality
    - คุณสมบัติและฟังก์ชันที่ใช้ร่วมกันได้ในระบบหรือแอปพลิเคชันที่มีหลายๆ โมดูล หรือ component ต่างๆ โดยที่ไม่จำเป็นต้องเขียนฟังก์ชันซ้ำกันหลายครั้ง ซึ่งจะช่วยประหยัดเวลาและลดความซับซ้อนของโค้ดได้
    - Knowing the location of the associated turtle
      - การระบุตำแหน่งของเต่าที่เกี่ยวข้อง
    -  Sending control input to turtlesim
      - การส่งควบคุมเข้าไปยังการจำลองเต่า (Turtle sim) เพื่อทำให้เต่าเคลื่อนที่ตามที่เราต้องการ
    - Using the same control law
      - การใช้กฎควบคุมเดียวกัน (Using the same control law) เป็นการใช้กฎหรือสมการเดียวกันในการควบคุมระบบหลายๆ ระบบ โดยที่กฎหรือสมการนั้นเป็นเหมือนกันทุกเครื่องหมาย ทำให้สามารถลดความซับซ้อนของการพัฒนาระบบได้ นอกจากนี้ยังช่วยให้การจัดการและบำรุงรักษาระบบที่ใช้กฎเดียวกันเป็นเรื่องง่ายขึ้นด้วย
  - Object-Oriented Programming
    - PositionController
      - อุปกรณ์หรือโปรแกรมที่ใช้สำหรับควบคุมตำแหน่งของวัตถุในระบบหนึ่ง ๆ เพื่อให้วัตถุเคลื่อนที่ไปสู่ตำแหน่งที่กำหนดไว้ โดยใช้ค่าตำแหน่งปัจจุบันของวัตถุและค่าตำแหน่งที่ต้องการให้วัตถุเคลื่อนที่ไปถึง เพื่อคำนวณหาความเร็วและทิศทางของการเคลื่อนที่ที่เหมาะสมเพื่อให้วัตถุเคลื่อนที่ไปสู่ตำแหน่งที่ต้องการได้อย่างแม่นยำ
      - subscribe to a turtle's pose
        - การติดตามการเปลี่ยนแปลงตำแหน่งและทิศทางของ turtle ในเวลาที่เกิดขึ้น โดย turtle ใน ROS จะทำหน้าที่ publish ข้อมูล pose ของ turtle ออกมา ซึ่งสามารถ subscribe ไปยัง topic นี้เพื่อรับข้อมูล pose ของ turtle ที่มีการเปลี่ยนแปลงได้โดยตลอดเวลา
      - publish Twist message to command velocity
        - การ publish Twist message เพื่อควบคุมความเร็วและทิศทางของ turtlebot ใน ROS สามารถทำได้โดยการสร้างโปรแกรม ROS ที่สามารถ publish ข้อความใน topic ของ command velocity ของ turtlebot ได้
      - have its internalstate machine
        - การเก็บข้อมูลสถานะภายในโปรแกรม ซึ่งช่วยให้โปรแกรมสามารถตรวจสอบสถานะของตัวเองและปรับการทำงานได้อย่างเหมาะสมตามสถานการณ์
    - TurtleFollower
      - เป็นโปรแกรมที่ใช้ในการควบคุม Turtlebot เพื่อทำให้ติดตามเส้นทางหรือวัตถุต่างๆ ได้อย่างมีประสิทธิภาพ
      - subscribe to a turtle's pose
        - การรับข้อมูลตำแหน่งและทิศทางของ turtle โดยใช้โปรแกรม ROS (Robot Operating System) ซึ่งเป็นระบบซอฟต์แวร์เพื่อควบคุมและควบคุมการเคลื่อนที่ของหุ่นยนต์
การ subscribe จะเป็นการรับข้อมูลจาก topic ที่เกี่ยวข้องกับตำแหน่งและทิศทางของ turtle โดยโปรแกรมจะเป็นผู้ subscribe ไปยัง topic นั้นๆ เพื่อรับข้อมูลที่ส่งมาจาก turtle โดย topic ที่เกี่ยวข้องกับ turtle's pose ใน ROS จะเป็น "/turtle1/pose" โดยที่ "turtle1" คือชื่อ turtle และ "pose" คือชื่อ topic ที่เกี่ยวข้องกับตำแหน่งและทิศทางของ turtle
      - ViaPointFollower
        - โปรแกรมใน ROS (Robot Operating System) ที่มีไว้สำหรับควบคุมการเคลื่อนที่ของหุ่นยนต์ โดยจะติดตามจุดในพื้นที่ ซึ่งเรียกว่า "via points" เพื่อเข้าไปยังจุดหมายปลายทาง
โดยการทำงานของ ViaPointFollower จะมีการสร้าง state machine หรือเครื่องมือควบคุมเคลื่อนที่ของหุ่นยนต์ ซึ่งสามารถแสดงสถานะและการทำงานของหุ่นยนต์ได้ในแต่ละช่วงของการเคลื่อนที่ เช่น การติดตามจุด, การหันหน้า, การเดินหน้า, หรือการหยุดนิ่ง เป็นต้น
การทำงานของ ViaPointFollower จะมีการ subscribe ไปยัง topic ที่เกี่ยวข้องกับ turtle's pose เพื่อรับข้อมูลตำแหน่งและทิศทางของ turtle โดยสามารถเข้าถึงได้ผ่าน "/turtle1/pose" ซึ่งเป็นชื่อ topic ที่เกี่ยวข้องกับ turtle ที่เราต้องการควบคุม
          - subscribe to a point
            - การรับข้อมูลจาก topic ที่เกี่ยวข้องกับ point โดยจะมีโปรแกรมหรือโมดูลที่ทำหน้าที่ subscribe เพื่อรับข้อมูล point และทำการประมวลผลหรือใช้ข้อมูลดังกล่าวในการควบคุมหรือปรับปรุงการทำงานของระบบ
เพื่อ subscribe ไปยัง point ใน ROS โดยทั่วไปจะใช้ไลบรารี่ rospy ซึ่งเป็นไลบรารี่ที่ใช้สำหรับการพัฒนาโปรแกรมใน ROS โดยโปรแกรมที่ต้องการ subscribe จะต้องกำหนดชื่อ topic ที่ต้องการรับข้อมูล และต้องระบุ callback function ซึ่งจะถูกเรียกเมื่อมีข้อมูลใหม่เข้ามาทาง topic นั้นๆ

- Topic >> Remapping & namespace
  - การเปลี่ยนชื่อ topic หรือ service ให้เป็นชื่ออื่นที่ต้องการ เพื่อให้โมดูลหรือโปรแกรมที่เชื่อมต่อกับ ROS สามารถเรียกใช้งาน topic หรือ service นั้นๆ ได้ตามชื่อที่ต้องการ โดยไม่จำเป็นต้องเปลี่ยนชื่อในโปรแกรมหรือโมดูลนั้นๆ
  - Inconsistent topic names
    - การใช้ชื่อ topic ที่ไม่สอดคล้องกันระหว่าง publisher และ subscriber ใน ROS ซึ่งอาจเกิดปัญหาในการเชื่อมต่อและสื่อสารระหว่างโปรแกรมหรือโมดูลต่างๆ ที่ใช้ ROS เพราะไม่สามารถระบุชื่อ topic ที่ถูกต้องได้
  - Remapping Topics
    - การเปลี่ยนชื่อ topic ของ publisher หรือ subscriber เพื่อให้เหมาะสมกับการใช้งานหรือการเชื่อมต่อกับโปรแกรมหรือโมดูลอื่นๆ การ remapping topics นั้นสามารถทำได้ผ่าน command-line หรือ launch file โดยการกำหนดชื่อเดิมและชื่อใหม่ของ topic ที่ต้องการเปลี่ยนแปลง
    - Outside of our code, we can "remap" the name of the topic in the command line.
      - เราสามารถ "remap" ชื่อของ topic ใน command line ได้ หมายถึงการเปลี่ยนชื่อของ topic ที่เราต้องการเชื่อมต่อในระหว่างการรันโปรแกรม โดยไม่ต้องแก้ไขโค้ดภายในโปรแกรม
    - In the code, we can change the subscribed topic to "pose" instead of using "/turtle1/pose".
      - ในโค้ดของเรา เราสามารถเปลี่ยนการ subscribe topic จาก "/turtle1/pose" เป็น "pose" ได้ โดยการใช้ remap ใน constructor ของ Subscriber object
    - We can apply the same idea to other topics.
      - เราสามารถนำแนวคิดเดียวกันมาใช้กับ topic อื่นๆ ได้เช่นกัน โดยการ remap topic ใน constructor ของ Subscriber หรือ Publisher object ตามที่เหมาะสม
    - In the command line, we can add arguments at the end.
      - ใน command line เราสามารถเพิ่ม argument ได้ที่ส่วนท้ายของคำสั่ง โดยการใช้ flag หรือ option ต่างๆ ที่เหมาะสม
  - Having the same type of nodes in ROS network
    - การมีประเภทเดียวกันของ nodes ใน ROS network สามารถช่วยให้การทำงานของระบบเป็นไปได้อย่างเป็นระบบและมีประสิทธิภาพมากขึ้น โดยสามารถทำได้โดยการเขียน nodes ที่มีลักษณะและพฤติกรรมที่เหมือนกันในแต่ละส่วนของระบบ
  - Distinguishing topics using namespace
    - ใน ROS การใช้ Namespace เป็นวิธีหนึ่งในการจัดกลุ่ม Nodes และ Topics ในลักษณะแบบชั้นโครงสร้างเพื่อเป็นการแยกแยะ Topic ที่มีชื่อเหมือนกันและป้องกันการขึ้นชื่อทับกัน
ตัวอย่างเช่น หากเรามีสอง Nodes ที่เผยแพร่ Topic ชื่อ "data" เราสามารถใช้ Namespace ต่างกันเพื่อแยกต่างหาก Topic ได้ เราจะใช้ Namespace ต่อไปนี้สำหรับแต่ละ Node
  - Topic with Namespace
    - ใน ROS มีการใช้ namespace เพื่อจัดกลุ่ม topic ที่เกี่ยวข้องกันในเครือข่าย ROS เช่นเดียวกับโครงสร้างไดเรกทอรีของระบบไฟล์ของคอมพิวเตอร์ โดย namespace จะช่วยให้เราสามารถระบุชื่อ topic ได้โดยใช้ชื่อที่ไม่ซ้ำกันภายใน ROS เช่นเดียวกับการใช้ชื่อไดเรกทอรีในระบบไฟล์
    - One can also add "namespace" to an entire node, which appendsthe namespace to the front of every name without "/" in the front.
      - ใน ROS สามารถเพิ่ม "namespace" ให้กับโหนดทั้งหมดได้ เพื่อให้ได้ชื่อที่ถูกต้องโดยอัตโนมัติโดยการเติม namespace ไปยังชื่อทุกชื่อที่ไม่มี "/" อยู่ข้างหน้า โดยที่ไม่จำเป็นต้องเพิ่ม namespace ให้แต่ละ topic แยกต่างหาก

- Topic >> Service Server & Service Client
  - Service Server และ Service Client เป็นส่วนหนึ่งของ ROS (Robot Operating System) ที่ใช้สำหรับการสื่อสารแบบบริการ (service-oriented communication) ซึ่งใช้แบบ request-response หรือ การขอ-ตอบ
Service Server เป็นโค้ดที่รับ request จาก Service Client และทำการตอบกลับด้วย response ซึ่งสามารถกำหนดฟังก์ชัน callback เพื่อจัดการ request และ response ตามที่ต้องการได้
Service Client เป็นโค้ดที่ส่ง request ไปยัง Service Server และรอรับ response กลับมา โดยสามารถเรียกใช้งานได้หลายครั้งและรอรับ response จาก Service Server หลังจากส่ง request
การใช้งาน Service Server และ Service Client สามารถนำมาประยุกต์ใช้ในงานต่างๆ เช่นการส่งข้อมูล sensor จากหุ่นยนต์ การเรียกใช้งานบริการหาเส้นทางจากหน้าจอควบคุม หรือการใช้งานบริการเพื่อคำนวณข้อมูลต่างๆ ของหุ่นยนต์
  - Attaching a service server and its callback
    - เพื่อที่จะทำการแนบเซอร์วิสเซิร์ฟเวอร์และคอลแบ็กของมันใน ROS
  -  Custom Interface
    - การสร้าง Custom Interface ใน ROS นั้นเป็นการกำหนดข้อมูลที่จะถูกส่งและรับรองรับโดยโปรแกรมใน ROS ทั้งหมด โดยปกติแล้ว ROS จะมี Interface พื้นฐานที่ใช้กันอยู่แล้ว เช่น Service ที่ใช้สำหรับการร้องขอข้อมูลจาก Node อื่น ๆ และ Publisher/Subscriber ที่ใช้สำหรับการส่งข้อมูลระหว่าง Node แต่ถ้าหาก Interface พื้นฐานเหล่านี้ไม่เพียงพอสามารถสร้าง Custom Interface เพิ่มเติมได้ตามความต้องการของโปรแกรม
    - Interface name muststart with uppercase letter and must not contain underscore or other unique characters. The 
field itself muststart with lowercase letter.
      - ชื่อ Interface จะต้องขึ้นต้นด้วยตัวอักษรพิมพ์ใหญ่และไม่ควรมีเครื่องหมายขีดล่างหรือตัวอักษรพิเศษอื่นๆ เขตตัวแปรของ Interface ต้องขึ้นต้นด้วยตัวอักษรพิมพ์เล็ก
  - Package with custom interface
    - การสร้างแพ็กเกจที่มี Custom Interface ใน ROS
  - CMakeLists.txt (custom interface)
    - ใน ROS, ไฟล์ CMakeLists.txt ใช้สำหรับการกำหนดการติดตั้งแพคเกจ หรือเมื่อเราต้องการใช้งาน custom interface ในแพคเกจของเรา เราจะต้องแก้ไขไฟล์ CMakeLists.txt เพื่อให้ ROS สามารถตรวจจับไฟล์ custom interface และสร้างไฟล์ของเม็ดเงินเพื่อใช้ในการสร้าง code สำหรับ ROS nodes ต่างๆ โดยไฟล์ CMakeLists.txt
  - package.xml (custom interface)
    - ไฟล์ package.xml ใช้สำหรับระบุข้อมูลของแพ็กเกจ ROS โดยปกติแล้วจะต้องระบุชื่อแพ็กเกจ และรายละเอียดอื่นๆ เช่น ผู้เขียน ผู้สนับสนุน และไลบรารีที่ใช้ โดยเฉพาะถ้าแพ็กเกจมีการใช้ custom interface ก็จะต้องระบุเป็นไฟล์ dependency ด้วย
  - Custom Interface for our turtlesim
    - สร้างอินเตอร์เฟซแบบกำหนดเองสำหรับ turtlesim ของเรา
  - custom service
    - การกำหนดบริการที่เหมาะสมสำหรับการใช้งานที่ต้องการเฉพาะ ระบบ ROS ช่วยให้ผู้ใช้สามารถสร้างบริการที่กำหนดเองได้ที่นิยมใช้สำหรับการกำหนดพฤติกรรมเฉพาะ เช่น การขอข้อมูลจากเซ็นเซอร์ การเรียกใช้การเคลื่อนไหวของหุ่นยนต์หรือการเปลี่ยนแปลงการกำหนดค่าของหุ่นยนต์
  - Synchronous vs Asynchronous Programming
    - Synchronous
      - การเขียนโปรแกรมแบบ Synchronous จะทำให้โปรแกรมมีการทำงานเป็นลำดับ โดยจะต้องรอให้โปรแกรมส่วนหนึ่งทำงานเสร็จก่อน ถึงจะเริ่มทำงานส่วนต่อไปได้ ซึ่งจะใช้เวลานานในการรอ และอาจทำให้โปรแกรมทำงานช้าลง
    - Asynchronous
      - ส่วน Asynchronous จะทำให้โปรแกรมมีการทำงานได้หลายอย่างพร้อมกัน โดยไม่ต้องรอให้ส่วนหนึ่งทำงานเสร็จก่อน ซึ่งจะช่วยให้โปรแกรมทำงานได้เร็วขึ้น แต่ก็อาจเกิดปัญหาเนื่องจากการทำงานแบบ Asynchronous จะทำให้การจัดการกับข้อมูลและความผิดพลาดเป็นไปได้หลากหลายมากขึ้น
  - Future Object (RCLPY)
    - ใน RCLPY มีคลาส Future ที่เป็นตัวแทนของค่าที่ยังไม่สามารถหาได้ในปัจจุบัน แต่อาจจะได้รับในอนาคต เมื่อมีค่าให้ Future แล้ว การเรียกใช้ method get() ของ Future จะรอการคืนค่าจนกว่าค่าจะมาถึง หากค่ามาถึงแล้ว get() จะคืนค่านั้นออกไป แต่หากยังไม่มีค่า get() จะเรียกใช้งานได้อย่างเป็น blocking และรอจนกว่าค่าจะมาถึง ในขณะที่รอ Future เราสามารถทำงานอื่นไปได้ ซึ่งจะช่วยให้เราใช้งานแบบ asynchronous ได้ง่ายขึ้น
  - Attaching a service client
    - การเชื่อมต่อ service client เป็นการสร้างอ็อบเจ็กต์ของ client และระบุชื่อของ service และประเภทของ service ที่จะใช้ หลังจากสร้าง client เรียบร้อยแล้ว สามารถใช้งาน client เพื่อเรียกใช้ service ด้วยอาร์กิวเมนต์ที่เหมาะสมได้
  - Time-driven vs. Event-driven
    - การเขียนโปรแกรมสามารถแบ่งออกเป็นสองแนวทางหลักได้แก่ การเขียนโปรแกรมแบบเวลาเป็นตัวกำหนด (time-driven) และการเขียนโปรแกรมแบบเหตุการณ์เป็นตัวกำหนด (event-driven) โดยแนวทางการเขียนโปรแกรมแบบเวลาเป็นตัวกำหนดจะให้การควบคุมเป็นไปตามเวลาที่กำหนดไว้ เช่น การทำงานที่บ้านและที่ทำงานจะต่างกัน เพราะเวลาเป็นตัวกำหนดในการทำงานของทั้งสองสถานที่ ในขณะที่แนวทางการเขียนโปรแกรมแบบเหตุการณ์เป็นตัวกำหนดจะทำงานตามเหตุการณ์ที่เกิดขึ้น เช่น การทำงานในระบบเครือข่ายจะต้องรอให้เกิดเหตุการณ์เช่นการเชื่อมต่อก่อนที่จะทำงานต่อไป หรือรอให้มีข้อมูลเข้ามาจากเซนเซอร์ก่อนที่จะทำการประมวลผลต่อไป
  - Waiting for a task to complete
    - การรอให้งานเสร็จสิ้นเป็นเรื่องที่สำคัญในการโปรแกรมแบบแบ่งเวลาหรือ time-driven ซึ่งต้องการรอให้งานที่กำหนดเวลาเสร็จสิ้นก่อนที่จะดำเนินการต่อไป เช่น การรอให้ข้อมูลถูกส่งกลับจากเว็บเซิร์ฟเวอร์ หรือการรอให้การทำงานสิ้นสุดของกระบวนการในภาษา Python
    - What if instead of only setting a goal, we also wait for the turtle to reach the goal ?
      - ในการรอให้เต่าถึงจุดหมายเป้าหมาย โดยใช้ฟังก์ชัน wait_for_result() ที่ให้ไว้ใน ROS แบบ Action จะช่วยให้โปรแกรมรอให้เต่าถึงจุดเป้าหมายก่อนที่จะทำงานอื่นต่อไป ซึ่งการใช้ฟังก์ชันนี้จะเป็นแบบ Synchronous โดยจะรอจนกว่า Action จะสมบูรณ์หรือจนกว่าจะหมดเวลาที่กำหนดไว้
    - When it reachesthe goal, itshould return the total distance (Euclidean).
      - เมื่อเครื่องหรือสิ่งของใดไปถึงจุดหมายที่กำหนดไว้แล้ว ต้องคืนค่าระยะทางรวม (ยูคลิเดียน) ทั้งหมดของการเคลื่อนที่ไปยังจุดหมายนั้นๆ เป็นคำแสดงความว่าเมื่อมีการนำเครื่องหรือสิ่งของไปถึงจุดหมายที่กำหนดไว้แล้ว จะต้องคำนวณหรือวัดระยะทางรวมที่เคลื่อนที่ไปยังจุดหมายนั้นๆ โดยใช้วิธีการวัดระยะ Euclidean ซึ่งเป็นวิธีการวัดระยะทางในระบบพิกัดแบบสองมิติ โดยใช้เป็นระยะทางแบบตรงระหว่างจุดสองจุดในพื้นที่ 2 มิติ ที่สัมพันธ์กันโดยใช้ระบบพิกัด (x,y)
    - In the meantime, itshould publish the elasped time.
      - ในขณะเดียวกัน ควรเผยแพร่เวลาที่ผ่านไป
- Topic >> Action, Callback Group, & Multithread Execution
  - การกระทำ (Action), กลุ่มการเรียกคืน (Callback Group), และการดำเนินการหลายเธรด (Multithread Execution)
  - Action & Single Thread Execution
    - การกระทำ (Action) และการดำเนินการในเธรดเดียว (Single Thread Execution)
  - Deadlock
  - Multithread Execution
    - การดำเนินการหลายเธรด
  - Callback Groups

# Lecture 2 : Launch Engineering
- Topic >> Launch Script & Launch Action
  - สคริปเปิดใช้งาน (Launch Script) และการกระทำเปิดใช้งาน (Launch Action)
  - Launch Filesin ROS2
    - ไฟล์เปิดใช้งาน (Launch Files) ใน ROS2
    - A (ROS2) Launch file allows a user to run a system with multiple ROS nodes or other launch files at once. One can also scheduling the system's behavior as well.
      - ไฟล์เปิดใช้งาน (Launch Files) ของ ROS2 ช่วยให้ผู้ใช้สามารถเรียกใช้ระบบที่ประกอบด้วยโหนดหลายๆ โหนดของ ROS หรือไฟล์เปิดใช้งานอื่นๆ พร้อมกันได้ นอกจากนี้ยังสามารถกำหนดตารางเวลาเพื่อควบคุมพฤติกรรมของระบบได้อีกด้วย
  - Writing Launch file in ROS(1)
    - เขียนไฟล์เปิดใช้งาน (Launch file) ใน ROS1
  - Writing Launch file in ROS2 with XML
    - เขียนไฟล์เปิดใช้งาน (Launch file) ใน ROS2 ด้วย XML
  - XML Launch file Structure
    - โครงสร้างของไฟล์เปิดใช้งาน (Launch file) ในรูปแบบ XML
  - Python Launch File Structure
    - โครงสร้างของไฟล์เปิดใช้งาน (Launch file) ในรูปแบบ Python
  - Executing command in Launch Script
    - การดำเนินคำสั่งในสคริปเปิดใช้งาน (Launch Script)
  - Package Layout
    - โครงสร้างแพคเกจ (Package Layout)
- Topic >> Executable Arguments & ROS2 Parameters
  - อาร์กิวเมนต์ของโปรแกรมที่สามารถเรียกใช้งานได้และพารามิเตอร์ของ ROS2
  - Arguments & Parameters of a ROS Node
    - อาร์กิวเมนต์และพารามิเตอร์ของโหนดใน ROS
    - "ROS2 Parameter(s)" is designed to be adjustable during runtime.
      - พารามิเตอร์ของ ROS2" ถูกออกแบบมาเพื่อให้สามารถปรับเปลี่ยนได้ระหว่างการทำงาน (runtime)
    - "Argument(s)" of an executable is assigned and used at the beginning of the execution.
      - "อาร์กิวเมนต์" ของโปรแกรมที่สามารถเรียกใช้งานได้ถูกกำหนดและใช้งานที่จุดเริ่มต้นของการทำงาน
  - ROS2 Parameters
    - พารามิเตอร์ของ ROS2
    - Instead of being a standalone value in a ROS network, ROS2 Parameters must be associated with a node.
      - ใน ROS2 Parameters ไม่ใช่ค่าแบบเดี่ยวของระบบ ROS แต่จะต้องถูกผูกกับโหนด (node) เพื่อใช้งาน
    - One can declare parameters in rclpy.Node
      - สามารถประกาศพารามิเตอร์ใน rclpy.Node
  - Assigning Parameters and Argumentsin Launch File
    - กำหนดค่าพารามิเตอร์และอาร์กิวเมนต์ในไฟล์เปิดใช้งาน (Launch File)
- Topic >> Data Deserialization
  - การแปลงข้อมูลกลับเป็นรูปแบบเดิม (Data Deserialization)
  - Passing Parameters Manually
    - การส่งพารามิเตอร์ด้วยวิธีกำหนดเอง (Passing Parameters Manually)
  - Automatic Deserialization from YAML file
    - การแปลงข้อมูลอัตโนมัติจากไฟล์ YAML (Automatic Deserialization from YAML file)
  - YAML Formatfor ROS2 Parameters
    - รูปแบบ YAML สำหรับพารามิเตอร์ ROS2
ใน ROS2 มีการใช้ YAML เป็นรูปแบบสำหรับการกำหนดค่าพารามิเตอร์ (parameters) ซึ่งเป็นไฟล์ข้อความที่ใช้ในการกำหนดค่าต่าง ๆ ของโหนด (node) ใน ROS2 โดยทั่วไปแล้ว YAML จะถูกใช้ในการกำหนดค่าพารามิเตอร์ที่มีขนาดใหญ่และมีโครงสร้างที่ซับซ้อน เช่น พารามิเตอร์สำหรับคอนฟิกของหุ่นยนต์
  - get_package_share_directory
    - get_package_share_directory เป็นฟังก์ชันใน ROS2 ที่ใช้ในการดึงตำแหน่งของไดเรกทอรี share ของแพ็กเกจ (package) ที่กำลังใช้งานอยู่ เพื่อให้สามารถเข้าถึงไฟล์ที่เก็บอยู่ในไดเรกทอรีนั้นได้อย่างสะดวก
    - To get the full path to the file, one must get the path to the "installed" package [NOT the 
one in src].
      - หากต้องการรับเส้นทางที่แน่นอนของไฟล์ที่เก็บในแพ็กเกจ (package) ใน ROS2 จะต้องดึงตำแหน่งของไดเรกทอรีที่ติดตั้งแล้ว (installed package) ไม่ใช่ตำแหน่งของไดเรกทอรีใน src ที่อยู่ในโฟลเดอร์ของโปรเจ็กต์ ROS2 ของเรา.
การติดตั้งแพ็กเกจจะนำเข้าโค้ดและไฟล์ของแพ็กเกจนั้น ๆ เข้าสู่ไดเรกทอรีของ ROS2 ซึ่งสามารถหาได้โดยใช้คำสั่ง rospack find หรือ ament find โดย ament เป็นคำสั่งใน ROS2 ที่ใช้ค้นหาแพ็กเกจที่ติดตั้งแล้วโดยอัตโนมัติ
    - "get_package_share_directory" allows the software to automatically return the full path to 
the path with the given name.
      - ฟังก์ชัน get_package_share_directory ใน ROS2 ช่วยให้ซอฟต์แวร์สามารถคืนค่าเส้นทางแบบอัตโนมัติไปยังไดเรกทอรี share ของแพ็กเกจ (package) ที่ระบุไว้
    - "os.path.join" append the string together as an appropriate path (with /).
      - ฟังก์ชัน os.path.join ใน Python ช่วยให้เราสามารถเชื่อมต่อเส้นทาง (path) ของไฟล์หรือไดเรกทอรีในระบบไฟล์ของเครื่องคอมพิวเตอร์ โดยอัตโนมัติเลือกตัวแบ่งเส้นทางที่ถูกต้องตามระบบปฏิบัติการที่ใช้งานอยู่ ซึ่งในระบบปฏิบัติการ Windows จะใช้ \ และใน macOS หรือ Linux จะใช้ /

- Topic >> Namespace Management
  - การจัดการเนมสเปซ (Namespace Management) ใน ROS2 เป็นการจัดการการใช้ชื่อ (name) ของโหนด (node) และอ็อบเจ็กต์ (object) ใน ROS2 ให้เป็นระเบียบและเหมาะสมกับงานที่ต้องการทำ โดยการใช้งาน Namespace ใน ROS2 จะช่วยให้เราสามารถกำหนดชื่ออ็อบเจ็กต์หรือโหนดได้อย่างเหมาะสมกับงานและมีความสอดคล้องกันในระบบ.
โดย Namespace ใน ROS2 จะมีการใช้งานอยู่ 2 รูปแบบ ได้แก่ Private Namespace และ Global Namespace.
Private Namespace จะเป็นการกำหนดชื่อในขอบเขตของโหนด โดยใช้ขีดล่าง (_) ในการเรียกชื่อโหนด ตัวอย่างเช่น หากมีโหนดชื่อ my_node และต้องการกำหนดชื่ออ็อบเจ็กต์เป็น my_object ภายในโหนด my_node จะใช้ Private Namespace โดยใช้ชื่อ my_node/my_object.
Global Namespace จะเป็นการกำหนดชื่อที่เหมือนกันในทุกๆโหนดในเครือข่าย ROS2 โดยใช้เครื่องหมาย / ในการเรียกชื่อโหนด ตัวอย่างเช่น ชื่อโหนด my_node ใน Global Namespace จะเรียกว่า /my_node
การจัดการเนมสเป็นส่วนสำคัญในการออกแบบและพัฒนาระบบ ROS2 โดยจะช่วยให้เราสามารถจัดการชื่อให้สอดคล้องกับโครงสร้างระบบได้อย่างมีประสิทธิภาพและเหมาะสมกับงานที่ต้องการทำ
  - Name
    - Name หมายถึงชื่อหรือตัวระบุของอ็อบเจ็กต์ (object) ใน ROS2 โดย Name จะถูกใช้เพื่อระบุตำแหน่งของอ็อบเจ็กต์ใน ROS2 โดยมีการใช้งาน Name ในหลายๆ ส่วนของ ROS2 เช่น ชื่อโหนด (node) ชื่อเซอร์วิส (service) ชื่อโปรแกรม (package) เป็นต้น.
การตั้งชื่อให้ถูกต้องและเหมาะสมเป็นสิ่งสำคัญในการออกแบบและพัฒนาระบบ ROS2 เพราะชื่อจะช่วยให้เราสามารถระบุตำแหน่งของอ็อบเจ็กต์ได้อย่างถูกต้อง โดยสามารถใช้งาน Name ในหลายๆ รูปแบบ เช่น Private Namespace และ Global Namespace เพื่อให้ชื่อมีความสอดคล้องกับโครงสร้างระบบและงานที่ต้องการทำ
นอกจากนี้การตั้งชื่อให้ถูกต้องและเหมาะสมยังช่วยให้ง่ายต่อการเข้าใจและการใช้งานของระบบ ROS2 โดยผู้ใช้งานสามารถระบุตำแหน่งของอ็อบเจ็กต์ได้อย่างง่ายดาย และไม่ต้องสับสนในการเรียกใช้งานในตอนต่อไป
    - Absolute name refers to a name that cannot be modified by other name token.
      - Absolute name หมายถึงชื่อที่ไม่สามารถแก้ไขได้โดย Name token อื่น ๆ ใน ROS2 นั่นคือชื่อที่ถูกกำหนดไว้และไม่มีวิธีการเปลี่ยนแปลง ซึ่งจะช่วยให้เราสามารถระบุตำแหน่งของอ็อบเจ็กต์ใน ROS2 ได้อย่างถูกต้องและสามารถใช้งานได้เหมือนเดิมตลอดเวลา.
การใช้งาน Absolute name มักจะใช้ในกรณีที่ต้องการระบุตำแหน่งของอ็อบเจ็กต์ใน ROS2 แบบแน่นอน โดยไม่มีความเปลี่ยนแปลงใดๆ ทั้งสิ้น เช่น ในการระบุตำแหน่งของโหนด (node) หรือเซอร์วิส (service) ที่ต้องการใช้งานโดยต้องระบุชื่ออย่างแน่นอน.
การใช้งาน Absolute name นอกจากจะช่วยให้เราระบุตำแหน่งของอ็อบเจ็กต์ได้อย่างถูกต้องแล้ว ยังช่วยให้เราสามารถเรียกใช้งานอ็อบเจ็กต์ที่ต้องการได้ง่ายขึ้น และลดความสับสนในการใช้งานของระบบ ROS2
        - Topic : /pose
          - Topic ชื่อ /pose ใน ROS2 เป็นหนึ่งใน Topic ที่สามารถใช้งานได้แบบ Real-time ซึ่งใช้สำหรับส่งข้อมูลตำแหน่ง (Position) และทิศทาง (Orientation) ของอ็อบเจ็กต์ (Object) จากหนึ่งโหนด (Node) ไปยังโหนดอื่นๆ ในระบบ ROS2.
Topic ชื่อ /pose นั้นมักจะถูกใช้งานในหลายๆ แอปพลิเคชัน ROS2 เพื่อให้สามารถรับ-ส่งข้อมูลตำแหน่งและทิศทางของอ็อบเจ็กต์ระหว่างโหนดได้อย่างมีประสิทธิภาพ ในการใช้งานจริง เราสามารถตั้งชื่อ Topic ตามที่เราต้องการได้ แต่ /pose เป็นชื่อ Topic ที่นิยมใช้งานมากในโครงการ ROS2 ด้วยความสามารถของ Topic นี้ในการควบคุมการเคลื่อนไหวของหุ่นยนต์หรือโดรนได้อย่างมีประสิทธิภาพและแม่นยำ
