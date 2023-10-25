var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.596421714818298,
          "pitch": 0.4022355260897861,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4028072437788444,
          "pitch": 0.4106072062566959,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -2.149807471841477,
          "pitch": 0.3680247630160913,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.1208542168816678,
          "pitch": 0.33239825142590185,
          "rotation": 0,
          "target": "3-stair_start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5614529609693575,
          "pitch": 0.356989295064551,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-stair_start",
      "name": "stair_start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4488465570492526,
          "pitch": 0.7643286973156105,
          "rotation": 0,
          "target": "4-front_door"
        },
        {
          "yaw": -2.0404379916040725,
          "pitch": 0.3169448640711785,
          "rotation": 0,
          "target": "5-stair_mid"
        },
        {
          "yaw": 2.867721179363171,
          "pitch": 0.3172482274509285,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-front_door",
      "name": "front_door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1679229467765229,
          "pitch": 0.694890556389419,
          "rotation": 0,
          "target": "3-stair_start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stair_mid",
      "name": "stair_mid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7093403127866633,
          "pitch": 0.8503189055755733,
          "rotation": 0,
          "target": "3-stair_start"
        },
        {
          "yaw": 2.186857736832378,
          "pitch": -0.07549196058890928,
          "rotation": 0,
          "target": "6-top_floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-top_floor",
      "name": "top_floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.007638036505671408,
          "pitch": 0.7585079339413987,
          "rotation": 0,
          "target": "5-stair_mid"
        },
        {
          "yaw": 1.2991525262775845,
          "pitch": 0.6542701881714947,
          "rotation": 0,
          "target": "7-bedroom_left"
        },
        {
          "yaw": -1.3105902445170834,
          "pitch": 0.7094868216209953,
          "rotation": 0,
          "target": "8-bedroom_right"
        },
        {
          "yaw": 2.4801481156630274,
          "pitch": 0.45105877414606965,
          "rotation": 0,
          "target": "9-bedroom_master"
        },
        {
          "yaw": -2.616913583641848,
          "pitch": 0.6903031049277537,
          "rotation": 0,
          "target": "10-bathroom_top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom_left",
      "name": "bedroom_left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7306486367771754,
          "pitch": 0.5591417568725987,
          "rotation": 0,
          "target": "6-top_floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom_right",
      "name": "bedroom_right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3426956635689997,
          "pitch": 0.5666119897351614,
          "rotation": 0,
          "target": "6-top_floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom_master",
      "name": "bedroom_master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.48764094779169653,
          "pitch": 0.48114413507090603,
          "rotation": 0,
          "target": "6-top_floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom_top",
      "name": "bathroom_top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7840021866456652,
          "pitch": 0.6624675862775362,
          "rotation": 0,
          "target": "6-top_floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "249 Brookside St",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
