const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){

}

function setup(){
    createCanvas(displayWidth-0.1, displayHeight-111);

    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(0);
}