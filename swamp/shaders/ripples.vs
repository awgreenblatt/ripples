/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

precision mediump float;

// Built-in attributes.

attribute vec4 a_position;
attribute vec2 a_texCoord;
attribute vec2 a_meshCoord;

// Built-in uniforms.

uniform mat4 u_projectionMatrix;
uniform vec2 u_textureSize;

// Uniforms passed-in from CSS

uniform mat4 transform;
uniform float time;
uniform float maxAmplitude;
uniform float decayTime;
uniform vec2 center;
uniform float s;
uniform float radiusScale;
 
// Varyings
varying float lighting;

// Constants

const float PI = 3.1415629;

// Main

void main()
{
  lighting = 1.0;
  
  vec4 pos = a_position;
  float decayedAmp = maxAmplitude *  min(max(0.0, 1.0 - time / decayTime), 1.0);

  vec2 distance = 2.0 * abs(a_position.xy - center);
  float radius = radiusScale * sqrt(distance.x * distance.x + distance.y * distance.y);
//  float radius = radiusScale * distance.x;
  
  float enabled = (time > radius ? 1.0 : 0.0);
  //lighting = enabled;
//  float v = decayedAmp * sin(radius) * (time > radius ? 1.0 : 0.0);
//  lighting = v / decayedAmp;
  //lighting = enabled * 0.5 * decayedAmp * (1.0+sin(time - radius)) / maxAmplitude;
  pos.z = enabled * decayedAmp * sin(time - radius);
  lighting = 2.0 * 0.5+pos.z / maxAmplitude;
  
  lighting = 2.0 * 0.5 + (enabled * decayedAmp * sin(2.0 * (time - radius)) / maxAmplitude);
  lighting = lighting / 2.0 + 0.5;
 
  //pos.z = enabled * decayedAmp * s * sin(time - radius);

  gl_Position = u_projectionMatrix * transform * pos;  
}

