/////
// Dependencies
/////
let each = require('async').each

// expose plugin
module.exports = plugin

/**
 * Metalsmith plugin to add additional meta data
 * @return {Function}
 */
function plugin(opts) {
    // default values
    opts = opts || {}

    let logging = opts.logging || false
    
    // plugin action
    return (files, metalsmith, done) => {
        let meta = metalsmith.metadata()

	    // append data to metadata
        meta.build = () => { 
            return new Date().getTime()
        }
        // date stuff
        meta.date_minutes = () => { 
            return new Date().getMinutes()
        }
        meta.date_hours = () => { 
            return new Date().getHours()
        }
        meta.date_day = () => { 
            return new Date().getDate()
        }
        meta.date_month = () => { 
            return new Date().getMonth() + 1 // starts with 0
        }
        meta.date_year = () => { 
            return new Date().getFullYear()
        }

        // override the metadata
        metalsmith.metadata(meta)

        done()
        
    }
}