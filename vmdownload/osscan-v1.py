import os

log_path = os.path.join(os.path.dirname(__file__), "foundos")

if os.path.isdir("C:\\Windows"):
    os_type = "Windows OS detected"
elif os.path.isfile("/System/Library/CoreServices/SystemVersion.plist"):
    os_type = "macOS detected"
elif os.path.isfile("/etc/os-release"):
    os_type = "Linux OS detected"
else:
    os_type = "Unknown OS"

with open(log_path, "w") as f:
    f.write(os_type)
