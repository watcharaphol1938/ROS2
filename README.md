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
  - Timer, Publisher, & Subscription
    - Attaching a timerto the node
      - การเชื่อมต่อตัวตั้งเวลากับโหนด
