import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return(
    <ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
    <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
    <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
  </li>
</ul>
  )
}

export default Home