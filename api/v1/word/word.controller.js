exports.setWord =  (req, res) => {
    const { word } =  req.body;
    try {
        if (!word || word === undefined) {
            res.status(400);
            return res.send('NotFound');
        }
        res.status(200)
        return res.json({data: word});
    }
    catch(err) {
        console.error(err);
        return res.status(500).json({
            message: 'Error setting word!'
        })
    }
};