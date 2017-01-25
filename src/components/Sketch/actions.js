
export const selectShape = (shapeId, segment, shift) => ({
	type: 'SELECT_SHAPE',
	shapeId,
	shift
})

export const clearSelection = () => ({
	type: 'CLEAR_SELECTION'
})

export const moveVertex = (id, position) => ({
	type: 'UPDATE_VERTEX',
	vertex: {
		id: id,
		x: position.x,
		y: position.y
	}
})

export const setPaneSplit = (split) => ({
	type: 'MOVE_SPLIT', split
})
