# S H A N P E S

Makes fancy text made from dots!

Demos:

https://jli.host/s-h-a-n-p-e-s/frontend/

# Make your own!

Clone the repository
```
git clone https://github.com/veggiedefender/s-h-a-n-p-e-s
cd s-h-a-n-p-e-s/
```

Install dependencies and activate pipenv
```
pipenv install
pipenv shell
```

Run it!
```
./img2dots.py > frontend/points.js
```

Open up `frontend/index.html` in a web browser and check it out! You will probably have to adjust the location and size
of the bottom plane.

# Customizing the shapes

`img2dots.py` gets its point data from `front.png` and `side.png`. Open them in image editing software and draw using
black and white. Feel free to adjust their sizes, but make sure they end up with the exact same height.

Images that are too big will look bad and result in slow performance!
