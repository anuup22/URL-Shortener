import { nanoid } from "nanoid";
import Url from "../models/url.model.js";

async function createShortUrl(req, res) {
    const body = req.body;
    if(!body.redirectUrl) {
        return res.status(400).json({
            status: "error",
            message: "redirectUrl is required"
        });
    }
    const shortId = nanoid(6).replace(/[^a-zA-Z]/g, '');

    await Url.create({
        shortId,
        redirectUrl: body.redirectUrl,
        user: req.user._id
    });
    return res.status(201).json({ shortId });
}

async function redirect(req, res) {
    const shortId = req.params.shortId;
    const url = await Url.findOne({ shortId });
    if (!url) {
        return res.status(404).json({
            status: "error",
            message: "URL not found"
        });
    }
    await Url.updateOne({
            shortId
        },
        {
            $push:
            {
                visits: { timestamp: Date.now() }
            }
        }
    );
    console.log("Redirecting to", url.redirectUrl);
    return res.redirect(url.redirectUrl);
}

async function getAnalytics(req, res) {
    const shortId = req.params.shortId;
    const url = await Url.findOne({ shortId });
    if (!url) {
        return res.status(404).json({
            status: "error",
            message: "URL not found"
        });
    }
    return res.status(200).json({
        shortId,
        redirectUrl: url.redirectUrl,
        visits: url.visits.length,
        analytics: url.visits
    });
}

<<<<<<< HEAD
async function getAllUrls(req, res) {
    if(!req.user) {
        return res.redirect('/login');
    }

    const allUrls = await Url.find({ user: req.user._id });
    return res.render('home', { urls: allUrls });
}

=======
>>>>>>> parent of 6060d44 (SSR: views done)
export {
    createShortUrl,
    redirect,
    getAnalytics
};