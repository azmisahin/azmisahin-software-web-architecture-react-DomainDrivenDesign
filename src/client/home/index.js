/**
 * ====================================================================================================
 * Name    : Home Script
 * File    : Home.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Referance
import './style.css';
import PageHeader from "./pageHeader";
import PageContent from "./pageContent";

import Timer from "../../components/timer";
/**
 * Home Page
 */
class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <PageHeader></PageHeader>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <PageContent></PageContent>
                        <Timer title="Timer : "></Timer>
                    </div>
                </div>
            </div>
        );
    }
}

// Export Module
export default HomePage