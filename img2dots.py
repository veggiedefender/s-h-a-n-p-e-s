#! /usr/bin/env python3

from PIL import Image
import numpy as np

def discretize(pixels):
    """Transforms a 3D array of pixel values into a 2D array

    Args:
        pixels: 3D array containing [R, G, B] values of each pixel

    Returns:
        a 2D array of boolean values. Colored pixels = True, white = False
    """
    return np.invert(pixels.T.sum(axis=0).T.astype(bool))

front = discretize(np.array(Image.open("front.png")))
side = discretize(np.array(Image.open("side.png")))

assert(front.shape[0] == side.shape[0]) # Images must be the same height

# Build point coordinates from images
# Ugly nesting but it works
points = []
for y in range(front.shape[0]):
    for x in range(front.shape[1]):
        if front[y][x]:
            for z in range(side.shape[1]):
                if side[y][z]:
                    points.append([x, front.shape[0] - y, side.shape[1] - z])

center = [front.shape[1] / 2, front.shape[0] / 2, side.shape[1] / 2]

# add random noise to disrupt grid pattern
points = [list(point + np.random.normal(0, 0.2, 3)) for point in points]

print(f"window.points = {points}; window.center = {center}")
