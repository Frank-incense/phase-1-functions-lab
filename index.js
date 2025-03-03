// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);
}
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}
function distanceTravelledInFeet(start, finish) {
    let blocks = start - finish;
    let feet = blocks * 264;
    return Math.abs(feet);
}
function calculatesFarePrice(start, finish) {
    let distance = distanceTravelledInFeet(start, finish);
    let fare = 0;
    if (distance > 2500){
        return 'cannot travel that far';
    }
    else if (distance > 2000) {
        return 25;
    }
    else if (distance > 400) {
        fare = (distance - 400) * 2;
        return fare / 100;
    }
    else {
        return 0;
    }

}