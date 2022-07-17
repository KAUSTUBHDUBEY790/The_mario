const movement = {
    update(gameObj) {
        gameObj.entities.goombas.forEach((goomba) => {
            goomba.currentState.movement(gameObj);
        })
        gameObj.entities.ducks.forEach((koopa) => {
            koopa.currentState.movement(gameObj);
        })
    }
}