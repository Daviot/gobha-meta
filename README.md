# gobha-meta

A [Metalsmith](www.metalsmith.io) plugin to add dynamic values to the metadata object of metalsmith

## Installation

	$ npm install gobha-meta
	
## Javascript Usage

```js
let meta = require('gobha-meta')

metalsmith.use(meta())
```

## Options
This plugin has no options, for now

## How to use in your template
The following metadata elements are added

### build

Returns the number of milliseconds since midnight Jan 1 1970

Can be used for cachebreaker, to update the resources on every build

```js
{{build}}
// 1496818748811
```

Used as Cachebreaker
```html
<link href="layout.css?{{build}}"  />
<!-- <link href="layout.css?1496818748811"  /> -->
```

### date_minutes
Returns the minutes (from 0-59)

```js
{{date_minutes}}
// 59
```

### date_hours
Returns the hour (from 0-23)

```js
{{date_hours}}
// 9 (0-23)
```

### date_day
Returns the day of the month (from 1-31)

```js
{{date_day}}
// 7 (1-31)
```

### date_month
Returns the month (from 1-12)

```js
{{date_month}}
// 6 (1-12)
```

### date_year
Returns the year

```js
{{date_year}}
// 2017
```

## License
MIT